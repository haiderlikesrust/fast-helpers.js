"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundOff = exports.sub = exports.multiply = exports.divide = exports.sum = void 0;
// Sums everything in an array and returns its sum
const sum = (array) => {
    let acc = 0;
    array.forEach(element => {
        acc += element;
    });
    return acc;
};
exports.sum = sum;
const divide = (number, divideByNumber, array, divideArray = false) => {
    if (divideArray) {
        let answerArray = [];
        let remainderArray = [];
        array.forEach((element) => {
            let answer = element / divideByNumber;
            let remainder = element % divideByNumber;
            answerArray.push(answer);
            remainderArray.push(remainder);
        });
        return {
            answer: answerArray,
            remainder: remainderArray
        };
    }
    else {
        return number / divideByNumber;
    }
};
exports.divide = divide;
const multiply = (number, multipliedByNumber, array, multiArray = false) => {
    if (multiArray) {
        let answerArray = [{}];
        array.forEach(ele => {
            let answer = ele * multipliedByNumber;
            answerArray.push(answer);
        });
        return answerArray;
    }
    else {
        return number * multipliedByNumber;
    }
};
exports.multiply = multiply;
const sub = (number, subtractedBy) => {
    return number - subtractedBy;
};
exports.sub = sub;
const roundOff = (number, array, roundArray = false) => {
    if (roundArray) {
        let answerArray = [];
        array.forEach(ele => {
            let answer = Math.round(ele);
            answerArray.push(answer);
        });
        return answerArray;
    }
    else {
        return Math.round(number);
    }
};
exports.roundOff = roundOff;
