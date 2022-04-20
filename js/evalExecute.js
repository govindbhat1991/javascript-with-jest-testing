/**
 * globally declaring math, which includes sum and mul methods
 */
window.$math = {
    sum: (a, b) => a + b,
    mul: (a, b) => a * b,
}

/**
 * globally declaring logger for console log the message
 */
window.$logger = (logMessage, func) => console.log(logMessage, func);

/**
 * this function will print the answer with given configuration
 */
const execute = (code, { a, b }) => eval(code);
// as per the requirement, i would use 'eval' but not recommended

module.exports = execute;