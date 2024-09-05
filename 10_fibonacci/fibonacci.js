const fibonacci = function(n) {
    if (n === 0) return 0;
    if (n === "0") return 0;
    if (n === 1) return 1;
    if (n < 0) return 'OOPS';
    let num = parseInt(n); 
    let prev1 = 0, prev2 = 1;
    for (let i = 2; i <= num; i++) {
      let current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
  
    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
