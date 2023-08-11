const add = function(numOne, numTwo) {
	return numOne + numTwo
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo
};

const sum = function(args) {
	let result = 0;

	for (let i = 0; i < args.length; i++){
		result += args[i];
	}
	return result;
};

const multiply = function(args) {
	let result = args[0];

	for (let i = 1; i < args.length; i++){
		result *= args[i];
	}
	return result;
};

const power = function(args) {
	let result = args[0];
	
	for (let i = 1; i < args.length; i++){
		result = Math.pow(result, args[i]);
	}
	return result;
};

const factorial = function(numOne) {
	if (numOne === 0) {
		return 1;
	} else {
		let result = numOne;
	
		for (let i = 1; i < numOne; i++){
			result *= i;
		}
		
		return result;}
	
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
