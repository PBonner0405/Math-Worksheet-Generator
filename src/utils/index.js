
const getRandomNumber = (length) => {
    var num = Math.random();    // Get Random number between 0-1
    const range = Math.pow(10, length); // Calculate Number Range 10^length 
    num = Math.floor(num * range);
    return num;
}

const getGCD = (a, b) => {
    while(b) {
        var r = a % b;
        a = b;
        b = r;
    }
    return a;
}

const getLCM = (a, b) => {
    return a * b / getGCD(a, b);
}

const getDivisionPair = (length, index) => {
    var result = {
        id: index,
        num1: 1,
        num2: 2,
    }
    while(true) {
        var num1 = getRandomNumber(length);
        var num2 = getRandomNumber(length);
        if(getGCD(num1, num2) > 10)
        {
            result = {
                id: index,
                first: (num1>num2?num1:num2),
                second: (num1>num2?num1:num2)/getGCD(num1, num2)
            }
            break;
        }
    }
    return result;
}

export {
    getRandomNumber,
    getDivisionPair,
    getGCD,
    getLCM,
}