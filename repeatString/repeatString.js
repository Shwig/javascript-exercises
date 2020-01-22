const repeatString = function(repeat, times) {

    if (times === 0) {
        return '';
    } else if (times < 0) {
        return 'ERROR';
    }

    let original = repeat;
    for (let i = 0; i < times-1; i++) {
        repeat = repeat.concat(original);

    }

    return repeat;

}

module.exports = repeatString
