const reverseString = function(str) {
    let newStr = str.split("").reverse().join("")
    return newStr
}
reverseString("hello there")
module.exports = reverseString
