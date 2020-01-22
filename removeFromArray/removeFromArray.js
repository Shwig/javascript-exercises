const removeFromArray = function (array, ...items) {

    console.log(items);
    console.log(array);

    items.forEach(item => {

        if (array.includes(item)) {
            array.splice(array.indexOf(item),1);
        }
        
    });

    console.log(items);
    console.log(array);
    return array;
}

module.exports = removeFromArray
