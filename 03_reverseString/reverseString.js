const reverseString = function(string) {
    stringLength = string.length;
    let newString = '';
    for (let i = stringLength; i > 0; i--) {
        newString = newString + string.slice(i-1,i)
    }
    return newString
};

console.log(reverseString(''))
// Do not edit below this line
module.exports = reverseString;
