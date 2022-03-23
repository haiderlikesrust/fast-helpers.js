"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToArray = exports.arrayToString = void 0;
const arrayToString = (array) => {
    let emptyStyring = "";
    array.forEach(element => {
        emptyStyring += ` ${element}`;
    });
    return emptyStyring;
};
exports.arrayToString = arrayToString;
// Changes Object to Array
const objectToArray = (object) => {
    const em = [];
    for (let i = 0; Object.keys(object).length > i; i++) {
        let array = [Object.keys(object)[i], Object.values(object)[i]];
        em.push(array);
    }
    return em;
};
exports.objectToArray = objectToArray;
