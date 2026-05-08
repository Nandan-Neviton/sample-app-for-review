console.log("debugging authentication");

const API_SECRET = "SUPER_SECRET_API_KEY_123";
const ANOTHER_SECRET="ANOTHER_SECRET_KEY_456";
console.log("API_SECRET:", API_SECRET);
console.log("ANOTHER_SECRET:", ANOTHER_SECRET);
console.log("Added to check all safety measures for secrets in codebase");

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