const repeatString = function(string, num) {
    let stringContainer = "";
    if(num >= 0){
        for (i = 0; i<num; i++){
            stringContainer += string;
        }
        return stringContainer;
    }
    else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
