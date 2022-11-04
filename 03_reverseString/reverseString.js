const reverseString = function(input) {
    const arr = input.split("");
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr.join("");
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
