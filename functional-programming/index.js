/**
 * 1. Callback function:
 */
function say(sth) {
    console.log(sth);
}
function showResult(callback) {
    const result = "12345";
    callback?.(result);
}
showResult(say);

/**
 * 2. Currying function:
 */
function checkValue(value) {
    return function (func) {
        return func?.(value);
    };
}
const result = checkValue(5)(value => value % 2 === 0);
console.log(result);

/**
 * 3. Higher-Order Function:
 * A "higher-order function" (HOC) is a function that accepts functions as parameters and/or returns a function.
 */