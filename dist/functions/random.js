"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
// Random object which has many methods.
exports.random = {
    // Enter any number in till and it will return it
    randint: (till) => {
        return Math.floor(Math.random() * till);
    },
    // Enter an array, and it will randomly pick any item from it
    choice: (array) => {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    }
};
