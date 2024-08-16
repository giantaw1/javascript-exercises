const sumAll = function(a, b) {
    let finalSum = 0;
    if (a > b) {
      for (let i = b; i <= a; i++) {
        finalSum += i;
      }
    } else if (a < 0 || b < 0) {
      return "ERROR";
    } else if (a !== parseInt(a) || b !== parseInt(b)) {
      return "ERROR";
    } else {
        for (let i = a; i <= b; i++) {
          finalSum += i;
      }
    }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
