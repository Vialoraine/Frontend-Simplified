// Q1: Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one.

// filterOutFalsy(0,500) -> 0
// filterOutFalsy(false, 100) -> false
// filterOutFalsy([true, 'Dog']) -> 'Dog'

// Actual Solution
function filterOutFalsy (element1, element2) {
  if (!element1) {
    return element1
  }
  else {
    return element2
  }
 }

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, 'Dog'));

// Better Solution

function filterOutFalsy(element1, element2) {
  return !element1 ? element1 : element2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

// Q2: Return the length of any given array
// Given an array, return its length

// arrLength([1, 2, 3]) -> 3
// arrLength([5, 0, -4, 1]) -> 4
// arrLength([]) -> 0

// function arrLength(arr) {
//   return arr.length;
// }

// console.log(arrLength([1, 2, 3]));
// console.log(arrLength([5, 0, -4, 1]));
// console.log(arrLength([]));

// Q3: Get the last element in an array
// Given an array, return the last element

// lastElem([3, 2, 0, 6, 2]) -> 2
// lastElem(['dog', 'cat', 'ball']) -> ball
// lastElem([null, 5, false]) -> false

// 1) lastElem([3, 2, 0, 6, 2]) -> 2

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));

// 2) lastElem(['dog', 'cat', 'ball']) -> ball

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem(['dog', 'cat', 'ball']))

// 3) (lastElem([null, 5, false]) -> false

function lastElem(arr) {
  return arr[arr.length -1];
}

console.log(lastElem([null, 5, false]));

// Q4: Find the sum of an array
// Given an array, return the sum of every element

// arrSum([2, 2, 2]) -> 6
// arrSum([100, 200, 500]) -> 800
// arrSum([0, -5, -10]) -> -15

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // THIS IS HOW YOU LOOP THROUGH EVERY ELEMENT IN AN ARRAY
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));