function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password)
    );
}

function createErrorResponse(code, message) {
    return {
        success: false,
        code,
        message
    };
}

function validateLoginRequest(email, password) {
    if (!email || !password) {
        return createErrorResponse(
            "EMPTY_CREDENTIALS",
            "Email and password are required"
        );
    }

    if (!isValidEmail(email)) {
        return createErrorResponse(
            "INVALID_EMAIL",
            "Email format is invalid"
        );
    }

    if (!isStrongPassword(password)) {
        return createErrorResponse(
            "WEAK_PASSWORD",
            "Password does not meet security requirements"
        );
    }

    return {
        success: true,
        message: "Validation successful"
    };
}
console.log("login validation service initialized");

module.exports = {
    validateLoginRequest
};
//breakthrough envision done by me
// this is test on new branch
// to check if the works in the 
// dashboard or not. 