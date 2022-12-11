const removeFromArray = function(array, removals) {
    const oldArray = array;
    for (let j = 1; j < arguments.length; j++) {
        let toBeRemoved = arguments[j];
        for (let i = 0; i < array.length; i++) {
            console.log(arguments[j])
            if (oldArray[i] === toBeRemoved) {
                oldArray.splice(i,1)
            } else {
                continue;
            }
        }
    } return oldArray
};
console.log(removeFromArray([1,2,3,4]))
// Do not edit below this line
module.exports = removeFromArray;
