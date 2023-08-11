const fibonacci = function(digit) {
    let lastNum = 0;
	let currentNum = 1;
    let nextNum;
    
    if (digit < 0) {
        return ("OOPS")
    } else {
        for (let i = 0; i < digit; i++) {
            nextNum = lastNum + currentNum;
            lastNum = currentNum;
            currentNum = nextNum;
        }
        return lastNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
