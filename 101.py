import os

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from jose import jwt
from jose.exceptions import JWTError, ExpiredSignatureError

app = FastAPI()

# Secret must come from environment variables
JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")

if not JWT_SECRET:
    raise RuntimeError("JWT_SECRET environment variable is not configured")


@app.middleware("http")
async def jwt_auth_middleware(request: Request, call_next):
    """
    JWT Authentication Middleware
    """

    # Public endpoints
    public_routes = ["/health"]

    if request.url.path in public_routes:
        return await call_next(request)

    auth_header = request.headers.get("Authorization")

    # Validate Authorization header
    if not auth_header:
        return JSONResponse(
            status_code=401,
            content={"error": "Authorization header is missing"}
        )

    if not auth_header.startswith("Bearer "):
        return JSONResponse(
            status_code=401,
            content={"error": "Invalid Authorization header format"}
        )

    token = auth_header.split(" ")[1]

    try:
        # Validate JWT signature and expiry
        payload = jwt.decode(
            token,
            JWT_SECRET,
            algorithms=[JWT_ALGORITHM]
        )

        # Store user information for downstream use
        request.state.user = payload

    except ExpiredSignatureError:
        return JSONResponse(
            status_code=401,
            content={"error": "Token has expired"}
        )

    except JWTError:
        return JSONResponse(
            status_code=401,
            content={"error": "Invalid token"}
        )

    except Exception:
        return JSONResponse(
            status_code=500,
            content={"error": "Authentication processing failed"}
        )

    return await call_next(request)


@app.get("/health")
async def health():
    return {"status": "healthy"}


@app.get("/profile")
async def profile(request: Request):
    return {
        "message": "Authenticated",
        "user": request.state.user
    }