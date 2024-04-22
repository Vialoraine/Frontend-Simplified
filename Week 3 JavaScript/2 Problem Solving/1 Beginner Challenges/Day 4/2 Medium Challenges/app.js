// Q1. Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one.

//   filterOutFalsy(0,500) -> 0
//   filterOutFalsy(false,100) -> false
//   filterOutFalsy([true,'Dog']) -> 'Dog'

// A: 

// const filterOutFalsy = (value1, value2) => {
//   return (!value1) ? value1 : value2
// }

// console.log(filterOutFalsy(0, 500))
// console.log(filterOutFalsy(false, 100))
// console.log(filterOutFalsy(true, 'Dog'))

// Q2. Return the length of any given array
// Given an array, return its length 

  // arrLength([1, 2, 3]) -> 3
  // arrLength([5, 0, -4, 1]) -> 4
  // arrLength([]) -> 0

  // A: 

// const arrLength = (array) => {
//   return array.length
// }

// console.log(arrLength([1, 2, 3]))
// console.log(arrLength([5, 0, -4, 1]));
// console.log(arrLength([]))

// Q3. Get the last element in an array
// Given and array, return the first element. 

//   lastElem([3, 2, 0, 6, 2]) -> 2
//   lastElem(['dog', 'cat', 'ball']) -> 'ball'
//   lastElem([null, 5, false]) -> false

// A: 

// const lastElem = (array) => {
//   return array[array.length -1]
// } 

// console.log(lastElem([3, 2, 0, 6, 2]));
// console.log(lastElem(["dog", "cat", "ball"]));
// console.log(lastElem([null, 5, false]));

// Q4. Find the sum of an array
// Given an array, return the sum of every element.

//   arrSum([2, 2, 2]) -> 6
//   arrSum([100, 200, 500]) -> 800
//   arrSum([0, -5, -10]) -> -15

// A:

// const arrSum = (array) => {
//   let arrSum = 0;
//   for (let i = 0; i < array.length; i++){
//     // This is how you loop through every element in an array
//     arrSum += array[i]
//   }
//   return arrSum
// }

// console.log(arrSum([2, 2, 2]));
// console.log(arrSum([100, 200, 500]));
// console.log(arrSum([0, -5, -10]));

// Q5. Add up the numbers from a single number
// Given a number, add up all the numbers from one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

//   progressiveSum(3) -> 6
//   progressiveSum(4) -> 10
//   progressiveSum(600) -> 180300

// A: 

// const progressiveSum = (num) => {
//   // variable progressiveSum is a function with a number as a parameter
//   let sum = 0;
//   // sum starts at the value of 0
//   for (let i = 1; i <= num; i++){
//   // starting at number 1
//   // keep going until you reach the same number
//   // increment by 1
//     sum += i;
//   // sum = number + previous number
//   }
//   return sum
//   // returns the sum
// }

// // console.log(progressiveSum(3))
// // console.log(progressiveSum(4))
// // console.log(progressiveSum(600))

// Q6. Calculate the time
// Given a number in seconds, return this number in mm:ss format. 

//   calcTime(66) -> '01:06'
//   calcTime(50) -> '00:50'
//   calcTime(300) -> '05:00'

// A: 

// My Answer:

// const calcTime = (seconds) => {
//   minute = Math.floor(seconds / 60);
//   second = Math.min(seconds % 60);
//   return `0${minute}:0${second}`
// }

// console.log(calcTime(66))
// console.log(calcTime(50))
// console.log(calcTime(300))

// Video Answer:

// function calcTime(seconds) {
//   let minute = Math.floor(seconds / 60);
//   let second = seconds % 60;

//   if (minute.toString().length === 1) {
//     minute = '0' + minute
//   }

//   if (second.toString().length=== 1) {
//     second = '0' + second
//   }

//   return minute + ':' + second;
// }
// console.log(calcTime(66))
// console.log(calcTime(50))
// console.log(calcTime(300))

// Manish Answer:

// function calcTime(seconds) {
//     const minutesNum = Math.floor(seconds / 60)
//     const secondsNum = seconds % 60

//     const minutesString = convertTimeNumIntoTimeString(minutesNum);
//     const secondsString = convertTimeNumIntoTimeString(secondsNum);

//     return minutesString + ":" + secondsString
// }

// function convertTimeNumIntoTimeString(num) {
//     if (num.toString().length <= 1) {
//         return '0' + num.toString();
//     }

//     return num.toString();
// }

// console.log(calcTime(66)) // 01:06
// console.log(calcTime(50)) // 00:50
// console.log(calcTime(300)) // 05:00 

// Q7. Find the largest number
// Given an array of numbers, return the largest number of that array

//   getMax([5, 100, 0]) -> 100
//   getMax([12, 10, -20]) -> 12
//   getMax([-300, -100, -200]) -> -100

// A: 

// const getMax = (array) => {
//   // created a variable function using an array as a parameter
//   let maxNum = array[0];
//   // setting the first item in the array to be the "maxNum"
//   for (let i = 1; i < array.length; i++) {
//   // the loop starts at the 1st index, and will loop through the entire array, going upwards by 1
//     if (array[i] > maxNum) {
//   // if the array index is larger than index 0
//       maxNum = array[i];
//   // the largest number will be that at that index
//     }
//   }
//   return maxNum;
//   // return the largest number
// }

// console.log(getMax([5, 100, 0]));
// console.log(getMax([12, 10, -20]));
// console.log(getMax([-300, -100, -200]));

// Q8. Reverse a string
// Given a string, return the reversed string

//   reverseString('abc') -> 'cba'
//   reverseString('David') -> 'divaD'
//   reverseString('This is cool') -> 'looc si sihT'

// Use an incrementing for loop
// Use a decrementing for loop
// use the arry reverse property

// A: 

