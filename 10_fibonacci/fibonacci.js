const fibonacci = function(num) {
    num = Number(num)
    if(num < 0){
        
        return "OOPS";
        
    }
    else{
        array = new Array(num).fill(1);
        for(i = 0; i<num; i++){
            if (i>1){
              array[i] = array[i-1] + array[i-2]
            }
          }
          return array[num-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
