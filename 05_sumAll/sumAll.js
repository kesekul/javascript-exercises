const sumAll = function(num1, num2) {
    let finalNum = 0;
    let startNum;
    let endNum;
    if (num1 < 0 || num2 < 0 || typeof(num1,num2) != 'number') {
        return "ERROR"
    } else if (num1 > num2) {
        startNum = num2;
        endNum = num1;
    } else {
        startNum = num1;
        endNum = num2;
    }
    for (let i = startNum; i <= endNum; i++) {
        finalNum = i+finalNum;
    } return finalNum
};

console.log(sumAll(2,4))

// Do not edit below this line
module.exports = sumAll;
