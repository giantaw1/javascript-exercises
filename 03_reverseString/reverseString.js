const reverseString = function(str) {
    let strArr = str.split("");
    let reverseArr = [];    
    for (char of strArr) {
      reverseArr.unshift(char);
    }
    return reverseArr.join("");
}

// Do not edit below this line
module.exports = reverseString;
