const sumAll = function (first, second) {

    if (((first < 0) || (second < 0)) ||
        ((typeof first !== "number") || 
        (typeof second !== "number"))) {

        console.log('ERROR');
        return 'ERROR'

    }

    let n = Math.abs(first - second) + 1;
    console.log(n);

    return ((n / 2) * (first + second));

}

module.exports = sumAll
