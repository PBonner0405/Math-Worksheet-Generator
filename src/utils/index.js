
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

const getSecondDivisionValue = (num1, num2) => {
    var gcd = getGCD(num1, num2);
    var result = (num1>num2?num1:num2)/gcd;
    if(result < 10)
        return result>gcd?result:gcd
    return (num1>num2?num1:num2)/gcd
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
                first: num1>num2?num1:num2,
                second: getSecondDivisionValue(num1, num2)
            }
            break;
        }
    }
    return result;
}

// Get Substraction 
const getSubtractionPair = (length, index) => {
    var num1 = getRandomNumber(length);
    var num2 = getRandomNumber(length);
    return {
        id: index,
        first: num1>num2?num1:num2,
        second: num1>num2?num2:num1
    }
}

// Get Addition and Subtraction Fact Family
const getAddSubFactFamily = (sum, index) => {
    const len = sum.toString().length
    var first = getRandomNumber(len) % sum;
    var second = getRandomNumber(len) % sum;
    return {
        id: index,
        first: first,
        second: second,
        last: Math.abs(first - second)
    }
}

export {
    getRandomNumber,
    getDivisionPair,
    getSubtractionPair,
    getGCD,
    getLCM,
    getAddSubFactFamily
}