// array.sort(comparisionFucntion) method
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

// Problem 1: Sort an Array of Numbers in Descending Order
const descendingOrder = function (numbers) {
  return numbers.sort(function (num1, num2) {
    return num2 - num1;
  })
}

// console.log(descendingOrder([1,2,3,3,4,5,6]));

// Problem 2: Sort Strings by Length in Ascending Order
const sortOnLength = function (strings) {
  return strings.sort(function (string1, string2) {
    return string1.length - string2.length;
  })
}

// console.log(sortOnLength(['laptop','mobile','tablet','PC']));

// Problem 3: Sort Numbers Based on Their Last Digit in Ascending Order
const sortByLastDigit = function (numbers) {
  return numbers.sort(function (num1, num2) {
    const num1LastDigit = num1 % 10;
    const num2LastDigit = num2 % 10;
    return num1LastDigit - num2LastDigit;
  })
}

// console.log(sortByLastDigit([42,78,29,13,62,91]));

// Sort Strings Alphabetically in Case-Insensitive Order



