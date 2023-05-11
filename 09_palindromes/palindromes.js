const palindromes = function (string) {
       
    newString = string.split('');        
    reverseString = newString.reverse();
    newString = string.split(/[!,\s:.1234567890=]/);
    reverseString = reverseString.join('').split(/[!,\s:.1234567890=]/);
    newString = newString.join('').toLowerCase();
    reverseString = reverseString.join('').toLowerCase();

    return newString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
