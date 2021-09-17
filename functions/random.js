const random = {
    randint: till => {
        return Math.floor(Math.random() * till)
    },

    choice: array => {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    }


}

export default random;

