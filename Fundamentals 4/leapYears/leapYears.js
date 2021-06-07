const leapYears = function(year) {

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else{
        return false;
    };
}

leapYears(1997)
module.exports = leapYears
