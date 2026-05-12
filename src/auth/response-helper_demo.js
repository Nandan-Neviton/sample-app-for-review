/**
 * Creates a standardized API response object.
 *
 * This helper function is used to maintain a consistent
 * response structure across all API endpoints.
 *
 * Example response:
 * {
 *   success: true,
 *   code: 200,
 *   message: "Data fetched successfully",
 *   data: {...}
 * }
 *
 * @param {boolean} success
 * Indicates whether the API request was successful.
 *
 * @param {number} code
 * HTTP status code or custom application status code.
 * Example: 200, 400, 404, 500
 *
 * @param {string} message
 * Human-readable message describing the response.
 *
 * @param {*} [data=null]
 * Optional payload returned from the API.
 * Can be an object, array, string, or null.
 *
 * @returns {Object}
 * Standardized API response object.
 */
function createApiResponse(success, code, message, data = null) {
    return {
        success,
        code,
        message,
        data
    };
}

/**
 * Export utility functions so they can be used
 * in other parts of the application.
 */
module.exports = {
    createApiResponse
};