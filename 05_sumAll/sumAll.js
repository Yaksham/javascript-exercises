const sumAll = function(from, to) {
    if (!(typeof from === "number" && typeof to === "number") || from < 0 || to < 0)
        return 'ERROR'
    let ans = 0;
    if (from <= to) {
        while (from <= to) 
            ans += from++;
    }
    else {
        while (to <= from)
            ans += to++;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
