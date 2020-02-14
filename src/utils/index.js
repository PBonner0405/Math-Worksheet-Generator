
const getRandomNumber = (length) => {
    var num = Math.random();    // Get Random number between 0-1
    const range = Math.pow(10, length); // Calculate Number Range 10^length 
    num = Math.floor(num * range);
    return num;
}

export {
    getRandomNumber,
}