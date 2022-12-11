const convertToCelsius = function(degree) {
  let tempInCels;
  tempInCels = (degree -32)*(5/9);
  tempInCels = Math.round(tempInCels*10) / 10;
  return tempInCels
} ;

const convertToFahrenheit = function(degree) {
  let tempInFahr;
  tempInFahr = (degree*(9/5)) + 32;
  tempInFahr = Math.round(tempInFahr*10) / 10;
  return tempInFahr
};

// console.log(convertToCelsius(32))
console.log(convertToFahrenheit(72.3))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
