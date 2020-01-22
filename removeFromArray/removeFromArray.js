const removeFromArray = function (array, ...items) {

    console.log(items);
    console.log(array);

    items.forEach(item => {

        if (array.includes(item)) {
            array.splice(array.indexOf(item),1);
        }
        // console.log('first level');
        // array.forEach(element => {

        //     console.log('second level');
        //     if (element === item) {

        //         console.log('third level');
        //         array.splice(array.indexOf(item), 1);
        //     }
        // });
    });

    console.log(items);
    console.log(array);
}

module.exports = removeFromArray
