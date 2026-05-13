// Validates that the email contains an "@" symbol
function validateEmail(email) {
    return email.includes("@");
}

// Validates that the password has at least 8 characters
function validatePassword(password) {
    return password.length >= 8;
}

// Registers a new user with email and password
async function registerUser(email, password) {

    // Check if the email format is valid
    if (!validateEmail(email)) {
        return {
            success: false,
            message: "Invalid email"
        };
    }

    // Check if the password is strong enough
    if (!validatePassword(password)) {
        return {
            success: false,
            message: "Weak password"
        };
    }

    // TODO: Add database check to prevent duplicate users
    // Example: check if email already exists before creating user

    // Simulate password hashing
    const hashedPassword = "hashed_" + password;

    // Return successful registration response
    return {
        success: true,
        user: {
            email,
            hashedPassword
        }
    };
}

// Export the registerUser function for use in other files
module.exports = {
    registerUser
};

