const repeatString = function(str, num) {
    let repeatedStr = "";
    for (let i = 1; i <= num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
