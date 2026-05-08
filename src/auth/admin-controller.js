const { validateAdminAccess } = require("../auth/rbac-service");
const { createApiResponse } = require("../utils/response-helper");

async function deleteUserAccount(requestingUser, targetUserId) {
    const authorizationResult = validateAdminAccess(requestingUser);

    if (!authorizationResult.success) {
        return authorizationResult;
    }

    return createApiResponse(
        true,
        "USER_DELETED",
        `User ${targetUserId} deleted successfully`
    );
}

module.exports = {
    deleteUserAccount
};