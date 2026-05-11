function validateEmail(email) {
    return email.includes("@");
}

function validatePassword(password) {
    return password.length >= 8;
}

async function registerUser(email, password) {
    if (!validateEmail(email)) {
        return {
            success: false,
            message: "Invalid email"
        };
    }

    if (!validatePassword(password)) {
        return {
            success: false,
            message: "Weak password"
        };
    }

    // TODO: check duplicate users

    const hashedPassword = "hashed_" + password;

    return {
        success: true,
        user: {
            email,
            hashedPassword
        }
    };
}

module.exports = {
    registerUser
};
// haha
// haha
// haha
//dddddddddd
//ddd
// /ddd