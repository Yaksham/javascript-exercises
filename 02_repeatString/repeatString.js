const repeatString = function(string, num) {
    if (num < 0)
        return 'ERROR'
    ans = ''
    for (let i = 0; i < num; i++) {
        ans += string;
    } 
    return ans;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
