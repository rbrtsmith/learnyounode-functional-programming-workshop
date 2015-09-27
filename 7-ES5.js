module.exports = function reduce(arr, fn, initial) {
    var head = arr[0],
        index = 1;
    if (arr.length) {
        initial = fn(initial, head, index, arr);
        return reduce(arr.slice(1), fn, initial);
    }
    return initial;
};