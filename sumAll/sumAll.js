const sumAll = function (first, second) {

    if (typeof first !== "number" || 
        typeof second !== "number"|| 
        first < 0 || second < 0) {

        console.log('ERROR');
        return 'ERROR'

    }

    let n = Math.abs(first - second) + 1;
    console.log(n);

    return ((n / 2) * (first + second));

}

module.exports = sumAll
