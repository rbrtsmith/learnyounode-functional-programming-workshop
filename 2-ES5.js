module.exports = function repeat(fn, num) {
    if (num) {
        fn();
        return repeat(fn, num -= 1);
    }
};