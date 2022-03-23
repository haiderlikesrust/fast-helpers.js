/**
 * Random object which has many methods.
 */
export const random = {
    /**
     * Enter any number in till and it will return it
     * @param till number
     */
    randint: (till: number): number => {
        return Math.floor(Math.random() * till)
    },

    /**
     * Enter an array, and it will randomly pick any item from it
     * @param array any[]
     */
    choice: (array: any[]): any => {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}
