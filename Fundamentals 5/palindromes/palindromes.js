const palindromes = function(str) {
    let reg =/[\W_]/g;

    let smallString = str.toLowerCase().replace(reg, "");


    let reversed = smallString.split('').reverse().join('')    // to make the string into an array with split 
    if (reversed === smallString){
        return true
    } else {
        return false
    }
}

module.exports = palindromes
