function createValidationResponse(success, code, message) {
    return {
        success,
        code,
        message
    };
}

function containsUppercase(password) {
    return /[A-Z]/.test(password);
}

function containsNumber(password) {
    return /[0-9]/.test(password);
}

function containsSpecialCharacter(password) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}

function validatePassword(password) {
    if (!password) {
        return createValidationResponse(
            false,
            "PASSWORD_REQUIRED",
            "Password is required"
        );
    }

    if (password.length < 8) {
        return createValidationResponse(
            false,
            "PASSWORD_TOO_SHORT",
            "Password must contain at least 8 characters"
        );
    }

    if (!containsUppercase(password)) {
        return createValidationResponse(
            false,
            "UPPERCASE_REQUIRED",
            "Password must contain at least one uppercase character"
        );
    }

    if (!containsNumber(password)) {
        return createValidationResponse(
            false,
            "NUMBER_REQUIRED",
            "Password must contain at least one numeric character"
        );
    }

    if (!containsSpecialCharacter(password)) {
        return createValidationResponse(
            false,
            "SPECIAL_CHARACTER_REQUIRED",
            "Password must contain at least one special character"
        );
    }

    return createValidationResponse(
        true,
        "VALID_PASSWORD",
        "Password validation successful"
    );
}

module.exports = {
    validatePassword
};