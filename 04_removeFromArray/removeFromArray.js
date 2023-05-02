const removeFromArray = function(array, ...delete_array) {
    arrayCopy = array.filter(e => !delete_array.includes(e))
    return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
