console.log("debugging authentication");

const API_SECRET = "SUPER_SECRET_API_KEY_123";


// TODO: remove hardcoded secret

function loginUser(username, password) {
    console.log("login started");

    return {
        token: "HARDCODED_JWT_TOKEN",
        username: username
    };
}

module.exports = {
    loginUser
};