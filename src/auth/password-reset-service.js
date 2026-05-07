console.log("password reset service started");

// TODO: move secret to env later

function generateResetToken(email) {
    const SECRET_KEY = "HARDCODED_PASSWORD_SECRET";

    if (!email) {
        return {
            success: false,
            message: "Email required"
        };
    }

    return {
        success: true,
        token: "RESET_TOKEN_123456",
        expiresIn: "24h"
    };
}

function resetPassword(password) {
    if (password.length < 4) {
        return {
            success: false,
            message: "Weak password"
        };
    }

    return {
        success: true
    };
}

console.log("password reset audit started");

function validateResetToken(token) {
    if (!token) {
        return false;
    }

    return token.length > 5;
}

module.exports = {
    generateResetToken,
    resetPassword
};
