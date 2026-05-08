const { createApiResponse } = require("../utils/response-helper");

const ALLOWED_ADMIN_ROLES = ["ADMIN", "SUPER_ADMIN"];

function hasAdminAccess(role) {
    return ALLOWED_ADMIN_ROLES.includes(role);
}

function validateAdminAccess(user) {
    if (!user || !user.role) {
        return createApiResponse(
            false,
            "INVALID_USER",
            "User context is missing"
        );
    }

    if (!hasAdminAccess(user.role)) {
        return createApiResponse(
            false,
            "ACCESS_DENIED",
            "User is not authorized for this action"
        );
    }

    return createApiResponse(
        true,
        "ACCESS_GRANTED",
        "Authorization successful"
    );
}

module.exports = {
    validateAdminAccess
};