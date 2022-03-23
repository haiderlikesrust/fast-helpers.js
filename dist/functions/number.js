"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenGenerator = exports.oddGenerator = exports.range = void 0;
// Range gives you an array which has all the numbers from start param to end param.
const range = (start = 0, end) => {
    let arr = [];
    while (start != end) {
        arr.push(start);
        start++;
    }
    return arr;
};
exports.range = range;
// Returns Generator Object for odd numbers
function* oddGenerator(till) {
    let returnedArray = range(0, till);
    for (let number of Object.values(returnedArray)) {
        if (number % 2 !== 0) {
            yield number;
        }
    }
}
exports.oddGenerator = oddGenerator;
// Returns Generator Object for even numbers
function* evenGenerator(till) {
    let returnedArray = range(0, till);
    for (let number of Object.values(returnedArray)) {
        if (number % 2 === 0) {
            yield number;
        }
    }
}
exports.evenGenerator = evenGenerator;
