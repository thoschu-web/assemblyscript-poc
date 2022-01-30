const fs = require("fs");
const loader = require("@assemblyscript/loader");
const lc = require("letter-count");

const imports = {
    // logging: {
    //     log(messagePtr) { // Called as `console.log` in assembly/index.ts
    //         console.log(wasmModule.exports.__getString(messagePtr));
    //     },
    //     time(labelPtr) { // Called as `console.time` in assembly/index.ts
    //         console.time(wasmModule.exports.__getString(labelPtr));
    //     },
    //     timeEnd(labelPtr) { // Called as `console.timeEnd` in assembly/index.ts
    //         console.timeEnd(wasmModule.exports.__getString(labelPtr));
    //     }
    // },
    index: {
        log: (message) => {
            console.dir(wasmModule.exports.__getString(message));
        },
        letterCount: (value, option) => {
            const val1 = wasmModule.exports.__getString(option);
            const val2 = wasmModule.exports.__getString(value);
            const val3 = lc.count(val1, val2);
            const val4 = JSON.stringify(val3);
            const val5 = wasmModule.exports.__newString(val4);
            return val5;
        },
        lcc: lc.count
    }
};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;
