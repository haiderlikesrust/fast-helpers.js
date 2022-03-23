// Sums everything in an array and returns its sum
export const sum = (array: any[]): number => {
    let acc = 0;
    array.forEach(element => {
        acc += element;
    });
    return acc
}


export const divide = (number: number, divideByNumber: number, array: Array<any>, divideArray: boolean = false) => {
    if (divideArray) {
        let answerArray: number[] = []
        let remainderArray: number[] = [];

        array.forEach((element: number) => {
            let answer = element / divideByNumber;
            let remainder = element % divideByNumber;
            answerArray.push(answer);
            remainderArray.push(remainder);
        })
        return {
            answer: answerArray,
            remainder: remainderArray
        }

    } else {
        return number / divideByNumber;
    }
}

export const multiply = (number: number, multipliedByNumber: number, array: number[], multiArray=false) => {
    if (multiArray) {
        let answerArray = [{}];
        array.forEach(ele => {
            let answer = ele * multipliedByNumber;
            answerArray.push(answer);
        })
        return answerArray;
    } else {
        return number * multipliedByNumber;
    }
}

export const sub = (number: number, subtractedBy: number) => {
    return number - subtractedBy;
}


export const roundOff = (number: number, array: number[], roundArray=false) => {
    if (roundArray) {
        let answerArray: number[] = [];
        array.forEach(ele => {
            let answer = Math.round(ele);
            answerArray.push(answer);
        })
        return answerArray;
    } else {
        return Math.round(number);
    }
}
