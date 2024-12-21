// array.concat() method
// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Problem : Merge Two Arrays
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

// console.log(array1.concat(array2));

// Problem 3: Combine Arrays of Different Data Types
const strings = ['book', 'pen', 'notes', 'bag'];
const numbers = [1,2,3,4,5];

const combineArray = function (strings, numbers){
  return strings.concat(numbers);
}

// console.log(combineArray(strings, numbers));
