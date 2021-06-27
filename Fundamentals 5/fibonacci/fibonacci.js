const fibonacci = function(number) {
    if(number < 3 && number > 0) {
        return 1;
    } else if (number < 0){
        return "OOPS";
    }
    return fibonacci(number-1) + fibonacci(number-2);
}

module.exports = fibonacci
