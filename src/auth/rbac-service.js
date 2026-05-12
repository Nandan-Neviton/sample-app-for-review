/**
 * Helper utility for validating whether a user has administrative access.
 */

const { createApiResponse } = require("../utils/response-helper");

/**
 * List of roles that are allowed to perform admin-level actions.
 *
 * @constant {string[]}
 */
const ALLOWED_ADMIN_ROLES = ["ADMIN", "SUPER_ADMIN"];

/**
 * Checks if the provided role has admin access.
 *
 * @param {string} role - Role assigned to the user.
 * @returns {boolean} Returns true if the role is allowed admin access.
 */
function hasAdminAccess(role) {
    return ALLOWED_ADMIN_ROLES.includes(role);
}

/**
 * Validates whether the given user object has proper admin authorization.
 *
 * Validation flow:
 * 1. Ensure user object exists.
 * 2. Ensure user has a role assigned.
 * 3. Check whether the role is included in allowed admin roles.
 *
 * @param {Object} user - Authenticated user object.
 * @param {string} user.role - Role assigned to the user.
 *
 * @returns {Object} Standard API response object.
 */
function validateAdminAccess(user) {

    // Check if user object or role is missing
    if (!user || !user.role) {
        return createApiResponse(
            false,
            "INVALID_USER",
            "User context is missing"
        );
    }

    // Check if user role has admin permissions
    if (!hasAdminAccess(user.role)) {
        return createApiResponse(
            false,
            "ACCESS_DENIED",
            "User is not authorized for this action"
        );
    }

    // User is authorized
    return createApiResponse(
        true,
        "ACCESS_GRANTED",
        "Authorization successful"
    );
}

/**
 * Export reusable authorization validation methods.
 */
module.exports = {
    validateAdminAccess
};
//added a comment to test the code review process
//test comment 2 to check the code review process
// test comment 3 to check the code review process
// test comment 4 to check the code review process
//  test comment 5 to check the code review process
//  test comment 6 to check the code review process
//  test comment 7 to check the code review process
//  test comment 8 to check the code review process
//  test comment 9 to check the code review process
//  test comment 10 to check the code review process
// test comment 11 to check the code review process
// test comment 12 to check the code review process
// test comment 13 to check the code review process
// test comment 14 to check the code review process
// test comment 15 to check the code review process
// test comment 16 to check the code review process
// test comment 17 to check the code review process
// test comment 18 to check the code review process
// test comment 19 to check the code review process
// test comment 20 to check the code review process