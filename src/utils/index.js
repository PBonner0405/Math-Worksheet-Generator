
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
        var gcd = getGCD(num1, num2);
        if(gcd > 10)
            if((num1/gcd > 1)||(num2/gcd > 1))
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
    var res;
    while(true) {
        var num1 = getRandomNumber(length);
        var num2 = getRandomNumber(length);
        if(Math.abs(num1-num2)>2)
        {
            res =  {
                id: index,
                first: num1>num2?num1:num2,
                second: num1>num2?num2:num1
            }
            break;
        }
    }
    return res;
}

// Get Addition and Subtraction Fact Family
const getAddSubFactFamily = (sum, index) => {
    const len = sum.toString().length
    var cnt = 10;
    var result;
    while(cnt > 0) {
        var first = getRandomNumber(len) % sum;
        var second = getRandomNumber(len) % sum;
        if(first > 1 && second > 1 && Math.abs(first - second) > 1)
        {
            result = {
                id: index,
                first: first,
                second: second,
                last: Math.abs(first - second)
            }
            break;
        }
    }
    return result;
}

// Get Addition and Subtraction Fact Family
const getMultiDiviFactFamily = (max, index) => {
    const len = max.toString().length
    var result;
    var cnt = 0;
    while(true) {
        var num1 = getRandomNumber(len) % max;
        var num2 = getRandomNumber(len) % max;

        console.log(max, num1, num2);
        var res = num1 * num2;
        cnt ++;
        if((num1 > 1 && num2 > 1) && (num1 < max && num2 < max)){
            if((index * 4) % 3 === 1)
                result = {
                    id: index,
                    first: res,
                    second: num1,
                    last: num2
                }
            if((index * 4) % 3 === 2)
                result = {
                    id: index,
                    first: num1,
                    second: res,
                    last: num2
                }
            if((index * 4) % 3 === 0)
                result = {
                    id: index,
                    first: num1,
                    second: num2,
                    last: res
                }
            break;
        }
        if(cnt > 10) {
            num1 = Math.floor(Math.random() * (+max - +2)) + +2;
            num2 = Math.floor(Math.random() * (+max - +3)) + +3;
            result = {
                id: index,
                first: num1,
                second: num1 * num2,
                last: num2
            }
        }

    }
    
    return result;
}

export {
    getRandomNumber,
    getDivisionPair,
    getSubtractionPair,
    getGCD,
    getLCM,
    getAddSubFactFamily,
    getMultiDiviFactFamily
}