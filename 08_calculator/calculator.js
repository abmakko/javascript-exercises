const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0,)
};

const multiply = function(arr) {
  return arr.reduce((accumulator, current) => accumulator * current, 1,)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {

  num === 0 ? 1 : num;
  arr = new Array(num).fill(0)

  new_arr = arr.map((element, index, array) => num-index);
  return new_arr.reduce((accum, curr) => accum * curr, 1,);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
