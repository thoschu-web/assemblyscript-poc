const wasm = require('.');

const { __newString, __getString, __new } = wasm;
const { add, test } = wasm;

console.log(add(3, 7));

const zzz = test(__newString('################'));
console.log(__getString(zzz));

// function doConcat(aStr, bStr) {
//     let aPtr = __newString(aStr);
//     let bPtr = __newString(bStr);
//     let cPtr = test(aPtr, bPtr);
//     let dStr = __getString(cPtr);
//
//     return dStr;
// };
//
// console.log(doConcat("Hello ", "world!"));
