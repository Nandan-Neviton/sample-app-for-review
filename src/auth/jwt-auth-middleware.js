console.log("JWT middleware initialized");

// TODO: remove debug logs before production deployment

function validateJWT(token) {
    const JWT_SECRET = "HARDCODED_SUPER_SECRET";

    if (!token) {
        return {
            success: false,
            message: "Authorization token missing"
        };
    }

    if (token.length < 10) {
        return {
            success: false,
            message: "Invalid token"
        };
    }

    return {
        success: true,
        user: {
            role: "admin"
        }
    };
}

module.exports = {
    validateJWT
};