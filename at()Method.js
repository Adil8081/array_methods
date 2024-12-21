// array.at(index)
// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Problem : Access the First and Last Element of an Array
const cornerElement = function (array) {
  const [first, last] = [array.at(0), array.at(-1)];
  return [first, last];
}

// console.log(cornerElement([1, 2, 3, 4, 5, 6]));

// Problem : Find the Middle Element of an Array
const midLength = function (length) {
  return Math.floor(length / 2);
}

const middleElement = function (array) {
  return array.at(midLength(array.length));
}

// console.log(middleElement([1, 2, 3, 4, 5, 6, 7]));

// Problem : Find the nth Element from the End
const lastNthElement = function (array, nth) {
  return array.at(-nth);
}

// console.log(lastNthElement([1, 2, 3, 4, 5, 6, 7], 4));

// Problem : Check if an Element Exists at a Given Index
const elementExists = function (array, index) {
  return array.at(index) !== undefined;
}

console.log(elementExists([1, 2, 3, 4, 5, 6, 7], 4));
console.log(elementExists([1, 2, 3, 4, 5, 6, 7], 9));
