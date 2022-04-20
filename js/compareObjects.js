const { isObject } = require('./types');

/**
 * return true if given objects are same
 */
const compareObjects = (objA, objB) => Object
    .keys(objA)
    .every(key => {
        const valueA = objA[key];
        const valueB = objB[key];
        const isBothObjects = isObject(valueA) && isObject(valueB);
        return !(isBothObjects && !compareObjects(valueA, valueB) || !isBothObjects && valueA !== valueB) || (!valueA && !valueB);
    })

module.exports = compareObjects;