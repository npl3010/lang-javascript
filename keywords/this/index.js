const callSomething = (callback) => {
    callback?.();
};
function callSomethingV2(callback) {
    callback?.();
}

/**
 * 1. FUNCTION CONTEXT:
 */
function Person1() {
    // Properties:
    this.name = "Linh";
    this.gender = "Male";
    // Methods:
    this._getInfo = () => {
        console.log(this?.constructor?.name);
    }
    this._getInfoV2 = function () {
        console.log(this?.constructor?.name);
    }
    this.getInfo = () => {
        callSomethingV2(this._getInfo); // _getInfo's "this" refers to Person1's "this".
        callSomethingV2(this._getInfoV2); // _getInfoV2's "this" refers to callSomethingV2's "this".
    }
    this.getInfoV2 = function () {
        callSomethingV2(this._getInfo); // _getInfo's "this" refers to Person1's "this".
        callSomethingV2(this._getInfoV2); // _getInfoV2's "this" refers to callSomethingV2's "this".
    }
}
const me1 = new Person1();
me1._getInfo(); // Output: Person1.
me1._getInfoV2(); // Output: Person1.
me1.getInfo(); // Output: Person1, Window.
me1.getInfoV2(); // Output: Person1, Window.
callSomethingV2(me1._getInfo); // Output: Person1.
callSomethingV2(me1._getInfoV2); // Output: Window.
callSomethingV2(me1.getInfo); // Output: Person1.
callSomethingV2(me1.getInfoV2); // Output: Window.
console.log('__________________________________________________');

/**
 * 2. CLASS CONTEXT:
 */
class Person2 {
    constructor() {
        // Properties:
        this.name = "Linh";
        this.gender = "Male";
    }
    // Methods:
    _getInfo = () => {
        console.log(this?.constructor?.name);
    }
    _getInfoV2 = function () {
        console.log(this?.constructor?.name);
    }
    getInfo = () => {
        callSomethingV2(this._getInfo);
        callSomethingV2(this._getInfoV2);
    }
    getInfoV2 = function () {
        callSomethingV2(this?._getInfo);
        callSomethingV2(this?._getInfoV2);
    }
}
const me2 = new Person2();
me2._getInfo(); // Output: Person2.
me2._getInfoV2(); // Output: Person2.
me2.getInfo(); // Output: Person2, undefined.
me2.getInfoV2(); // Output: Person2, undefined.
callSomethingV2(me2._getInfo); // Output: Person2.
callSomethingV2(me2._getInfoV2); // Output: undefined.
callSomethingV2(me2.getInfo); // Output: Person2, undefined.
callSomethingV2(me2.getInfoV2); // No output.
console.log('__________________________________________________');