const sumAll = function(num1, num2) {

    if (num1 >= 0 && num2 >= 0 && (typeof (num1 + num2) === 'number')){
        difference = (Math.abs(num1 - num2)) + 1

        sumOfSeries = (difference/2) * (num1 + num2);
        return sumOfSeries;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
