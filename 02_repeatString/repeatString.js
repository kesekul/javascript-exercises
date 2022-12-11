const repeatString = function(stringName, numTimes) {
    let stringLong;
    if (numTimes === 0) {
        stringLong = '';
    } else if (numTimes < 0) { 
        stringLong = 'ERROR';
    } else {
        stringLong = stringName;
        for (let i = 1; i < numTimes; i++) {
            stringLong = stringLong + stringName;
        }
        
    } return stringLong
};

// Do not edit below this line
module.exports = repeatString;
