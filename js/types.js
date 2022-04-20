/**
 * return boolean after checking the given value is a object
 */
module.exports = {
    isObject: (property) => property !== null && typeof(property) === "object",
};
