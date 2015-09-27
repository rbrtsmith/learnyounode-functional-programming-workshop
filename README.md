Solutions for the Learnyounode functional programming workshop

1. Write a function that takes an input string and returns it uppercased.
2. Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
3. Convert the following code from a for-loop to Array#map:
    `
    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
    `
    