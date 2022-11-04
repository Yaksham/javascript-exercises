const removeFromArray = function(arr, ...args) {
    args.forEach(item => {
        const index = arr.indexOf(item);
        if (index > -1)
            arr.splice(index, 1);
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
