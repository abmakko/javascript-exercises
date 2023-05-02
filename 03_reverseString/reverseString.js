const reverseString = function(string) {
    string_array = string.split("");
    string_arrayReverse = string_array.reverse();
    string_reverse = string_arrayReverse.join("");

    return string_reverse;

};

// Do not edit below this line
module.exports = reverseString;
