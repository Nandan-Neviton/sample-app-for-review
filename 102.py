import os
import re
import secrets
from datetime import datetime, timedelta

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

app = FastAPI()

# Secret must come from environment variables
RESET_TOKEN_SECRET = os.getenv("RESET_TOKEN_SECRET")

if not RESET_TOKEN_SECRET:
    raise RuntimeError("RESET_TOKEN_SECRET environment variable is not configured")

# In-memory token store for demonstration purposes
# Production systems should use a database or secure cache.
reset_tokens = {}


class PasswordResetRequest(BaseModel):
    email: EmailStr


class PasswordResetConfirm(BaseModel):
    token: str
    new_password: str


def validate_password_strength(password: str) -> bool:
    """
    Password requirements:
    - Minimum 8 characters
    - At least one uppercase letter
    - At least one lowercase letter
    - At least one digit
    - At least one special character
    """
    pattern = (
        r"^(?=.*[a-z])"
        r"(?=.*[A-Z])"
        r"(?=.*\d)"
        r"(?=.*[@$!%*?&])"
        r"[A-Za-z\d@$!%*?&]{8,}$"
    )

    return bool(re.match(pattern, password))


@app.post("/password-reset/request")
async def request_password_reset(request: PasswordResetRequest):
    """
    Generate password reset token.
    Token expires after 15 minutes.
    """

    try:
        token = secrets.token_urlsafe(32)

        reset_tokens[token] = {
            "email": request.email,
            "expires_at": datetime.utcnow() + timedelta(minutes=15)
        }

        return {
            "message": "Password reset link generated",
            "reset_token": token,
            "expires_in_minutes": 15
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Failed to generate password reset token"
        )


@app.post("/password-reset/confirm")
async def confirm_password_reset(request: PasswordResetConfirm):
    """
    Validate token and reset password.
    """

    token_data = reset_tokens.get(request.token)

    if not token_data:
        raise HTTPException(
            status_code=400,
            detail="Invalid reset token"
        )

    if datetime.utcnow() > token_data["expires_at"]:
        reset_tokens.pop(request.token, None)

        raise HTTPException(
            status_code=400,
            detail="Reset token has expired"
        )

    if not validate_password_strength(request.new_password):
        raise HTTPException(
            status_code=400,
            detail=(
                "Password must contain at least 8 characters, "
                "one uppercase letter, one lowercase letter, "
                "one digit, and one special character"
            )
        )

    # Password update logic would occur here.
    # Password should be hashed before storage.

    reset_tokens.pop(request.token, None)

    return {
        "message": "Password reset successful"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }