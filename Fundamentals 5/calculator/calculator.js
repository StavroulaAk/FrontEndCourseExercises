function add (a, b) {
	return a + b	
}

function subtract (a, b) {
	return a - b	
}

function sum (arr) {
	// return arr.reduce((sum,number) => {
	// 	return sum + number
	// }, 0)

	// OR
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
	  total += arr[i];
	}
	return total;
}

function multiply (arr) {
	let total = 1;
	for(let i = 0; i < arr.length; i++){
		total *= arr[i]
	}
	return total
}

function power(a, b) {
	return a ** b	
}

function factorial(number) {
	let result = 1;
	for(let i = 1; i <= number; i++){
		result = result * i;
	}
	return result	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}