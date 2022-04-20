const { isObject } = require('./types')

/**
 * returns a new copy of given object
 */
const deepCopy = (obj) => {
    const clone = {};
    Object
        .entries(obj)
        .map(([i, v]) => isObject(v) ? clone[i] = deepCopy(v) : clone[i] = v);
    return clone;
}

module.exports = deepCopy;