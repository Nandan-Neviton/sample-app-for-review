const { validateSessionUser } = require("../session/session-validator");

function createResponse(success, code, message, data = null) {
    return {
        success,
        code,
        message,
        data
    };
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

async function loginUser(email, password) {
    if (!email || !password) {
        return createResponse(
            false,
            "EMPTY_CREDENTIALS",
            "Email and password are required"
        );
    }

    if (!isValidEmail(email)) {
        return createResponse(
            false,
            "INVALID_EMAIL",
            "Email format is invalid"
        );
    }

    if (!validatePassword(password)) {
        return createResponse(
            false,
            "WEAK_PASSWORD",
            "Password does not meet minimum requirements"
        );
    }

    const sessionUser = validateSessionUser(email);

    return createResponse(
        true,
        "LOGIN_SUCCESS",
        "User authenticated successfully",
        {
            email,
            sessionUser
        }
    );
}

module.exports = {
    loginUser
};