function createApiResponse(success, code, message, data = null) {
    return {
        success,
        code,
        message,
        data
    };
}

module.exports = {
    createApiResponse
};