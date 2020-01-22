const leapYears = function (year) {

    console.log(year)

    if (((year % 100 === 0) && (year % 400 !== 0)) || (year % 4 !== 0)) {
        console.log(year + " false")
        return false;
    }

    console.log(year + " true")
    return true;

}

module.exports = leapYears
