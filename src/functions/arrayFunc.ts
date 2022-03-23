/**
 * Changes an array to a string.
 * @param array any[] The array to be converted.
 */
export const arrayToString = (array: any[]): string => {
    let emptyStyring = ""
    array.forEach(element => {
        emptyStyring += ` ${element}`
    });
    return emptyStyring
}

/**
 * Changes Object to Array
 * @param object The object to be converted.
 */
export const objectToArray = (object: object): any[][] => {
    const em = []
    for (let i=0; Object.keys(object).length > i; i++) {
        let array = [Object.keys(object)[i], Object.values(object)[i]]
        em.push(array)
    }
    return em
}
