function validateSessionUser(email) {
    return {
        id: generateSessionId(),
        email,
        expiresInMinutes: getSessionExpiration()
    };
}

function generateSessionId() {
    return (
        Math.random().toString(36).substring(2) +
        Date.now().toString(36)
    );
}

function getSessionExpiration() {
    return process.env.SESSION_EXPIRATION_MINUTES || 30;
}

module.exports = {
    validateSessionUser
};