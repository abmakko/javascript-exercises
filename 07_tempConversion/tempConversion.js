const convertToCelsius = function(temperature) {
  new_temp = (temperature - 32) * (5/9);
  new_temp = new_temp.toFixed(1);
  new_temp = parseFloat(new_temp);
  return new_temp
};

const convertToFahrenheit = function(temp) {
  new_temp = ((temp * 9/5) + 32);
  new_temp = new_temp.toFixed(1);
  new_temp = parseFloat(new_temp);
  return new_temp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
