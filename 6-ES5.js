module.exports = function countWords(inputwords) {
    return words = inputwords.reduce(function(words, word) {
        words[word] = (words[word] +=1) || 1;
        return words;
    }, {});
};