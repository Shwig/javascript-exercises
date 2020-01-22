const reverseString = function (normal) {

    let reverse = '';
    for (let i = 0; i < normal.length; i++) {
        reverse = reverse.concat(normal.charAt((normal.length - 1) - i));
    }

    return reverse;

}

module.exports = reverseString
