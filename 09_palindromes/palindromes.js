const palindromes = function (str) {
    const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');
    const cleanStr = clean(str);
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
