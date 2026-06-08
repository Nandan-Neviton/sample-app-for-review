import os
import re
import hashlib
import secrets

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

app = FastAPI()

# Configuration from environment variables
PASSWORD_SALT = os.getenv("PASSWORD_SALT")

if not PASSWORD_SALT:
    raise RuntimeError("PASSWORD_SALT environment variable is not configured")

# In-memory user store for demonstration purposes.
# Production systems should use a database.
users_db = {}


class UserRegistrationRequest(BaseModel):
    email: EmailStr
    password: str


class UserService:
    """
    Service layer responsible for user registration.
    """

    @staticmethod
    def validate_password_strength(password: str) -> bool:
        pattern = (
            r"^(?=.*[a-z])"
            r"(?=.*[A-Z])"
            r"(?=.*\d)"
            r"(?=.*[@$!%*?&])"
            r"[A-Za-z\d@$!%*?&]{8,}$"
        )
        return bool(re.match(pattern, password))

    @staticmethod
    def hash_password(password: str) -> str:
        salted_password = f"{password}{PASSWORD_SALT}"

        return hashlib.sha256(
            salted_password.encode("utf-8")
        ).hexdigest()

    @staticmethod
    def register_user(email: str, password: str):
        if email in users_db:
            raise HTTPException(
                status_code=409,
                detail={
                    "code": "USER_ALREADY_EXISTS",
                    "message": "User already exists"
                }
            )

        if not UserService.validate_password_strength(password):
            raise HTTPException(
                status_code=400,
                detail={
                    "code": "WEAK_PASSWORD",
                    "message": (
                        "Password must contain at least 8 characters, "
                        "one uppercase letter, one lowercase letter, "
                        "one number, and one special character"
                    )
                }
            )

        password_hash = UserService.hash_password(password)

        users_db[email] = {
            "id": secrets.token_hex(8),
            "email": email,
            "password_hash": password_hash
        }

        return {
            "message": "User registered successfully",
            "user": {
                "email": email
            }
        }


@app.post("/register")
async def register(request: UserRegistrationRequest):
    try:
        return UserService.register_user(
            email=request.email,
            password=request.password
        )

    except HTTPException:
        raise

    except Exception:
        raise HTTPException(
            status_code=500,
            detail={
                "code": "REGISTRATION_ERROR",
                "message": "Unable to process registration request"
            }
        )


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }