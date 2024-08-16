const convertToCelsius = function(deg) {
  const toCelsius = (deg - 32) * 5 / 9;
  if (toCelsius !== parseInt(toCelsius)){
    return +toCelsius.toFixed(1);
  } else {
    return toCelsius;
  }
};

const convertToFahrenheit = function(deg) {
  const toFahrenheit = deg * 9 / 5 + 32;
  if (toFahrenheit !== parseInt(toFahrenheit)){
    return +toFahrenheit.toFixed(1);
  } else {
    return toFahrenheit;
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
