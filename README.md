Solutions for the Learnyounode functional programming workshop

1. Write a function that takes an input string and returns it uppercased.

2. Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

3. Convert the following code from a for-loop to Array#map:
    ```javascript
    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
    ```

4. Use Array#filter to write a function called getShortMessages.getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
The function should return an array containing the messages themselves, without their containing object.

5. Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
You only need to check that the ids match.

6. Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

7. Implement Array#reduce using recursion.
To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.
For simplicity, your implementation of reduce **need not replicate the behaviour of a reduce missing an initial value.** You may assume the initial value will always be supplied.
