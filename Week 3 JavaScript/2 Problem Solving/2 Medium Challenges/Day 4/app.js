// Q1 Falsy or Truthy?
// Given two values, return the first one if it is false, otherwise return the second one.

// const filterOutFalsy = (value1, value2) => {
//   return !value1 ? value1 : value2;
// };

// console.log(filterOutFalsy(0, 500));
// console.log(filterOutFalsy(false, 100));
// console.log(filterOutFalsy(true, "Dog"));

// Q2 Return the length of any given array
// Given an array, return its length.

const arrLength = (array) => {
  return array.length;
};

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// Q3 Get the last element in an array
// Given an array, return the last element

const lastElem = (array) => {
  return array[array.length - 1];
};

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

// Q4 Find the sum of an array
// Given and array, return the sum of every element.

const arrSum = (array) => {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Q5 Add up the numbers from a single number
// Given a number, add up all the numbers from one to the number that is given. Eg. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

const progressiveSum = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

// Q6 Calculate the time
// Given a number in seconds, return this number in mm:ss format

// const calcTime = (seconds) => {
//   const minute =  Math.floor(seconds / 60);
//   const second = Math.min(seconds % 60);
//   return `0${minute}:0${second}`
// }

// console.log(calcTime(66))
// console.log(calcTime(50))
// console.log(calcTime(300))

const calcTime = (seconds) => {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  const minuteString = valueToString(minute);
  const secondString = valueToString(second);

  return minuteString + ":" + secondString;
};

const valueToString = (number) => {
  if (number.toString().length <= 1) {
    return "0" + number.toString();
  }
  return number.toString();
};

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

// Q7 Find the largest number
// Given an array of numbers, return the largest number of that array

const getMax = (array) => {
  let largestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  return largestNumber
};

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

// Q8 Reverse a string
// Given a string, return the reversed sting

// Incrementing For Loop

const reverseString = (string) => {
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
  reversedString = string[i] + reversedString
  }
  return reversedString
} 

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))

// Decrementing For Loop

// const reverseString = (string) => {
//   let reversed = '';
//   for (let i = string.length - 1; i>= 0; i--) {
//     reversed += string[i]
//   }
//   return reversed
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Array Reverse Property

// const reverseString = (string) => {
//   let arrayString = string.split("");
//   let reverse = arrayString.reverse();
//   let stringArray = reverse.join("");
//   return stringArray
// }

// OR 

// const reverseString = (string) => {
//   return arrayString = string.split("").reverse().join("");
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Q9 Turn every element in an array into 0
// Given an array of elements, return the same length array filled with 0's

// Solution 1: For Loop

// const convertToZeros = (array) => {
//   let arrayOfZeros = [];
//   for (let i = 0; i < array.length; i++){
//    arrayOfZeros[i] = 0
//   }
//   return arrayOfZeros
// }

// console.log(convertToZeros([5, 100, 0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))


// Solution 2: Array 'fill'

// const convertToZeros = (array) => {
//   return arrayOfZeros = array.fill(0);
// }

// console.log(convertToZeros([5, 100, 0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// Solution 3: Array 'map'

const convertToZeros = (array) => {
  return array.map(x => 0)
}

console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1, 2, 3, 4, 5]))

// Q10 Filter out all the apples
// Given an array of fruits, if it is an apple remove it from the array.

// Solution 1: For loop

// const removeApples = (array) => {
//   let removedApples = [];
//   for (let i = 0; i < array.length; i++){
//     if (array[i] !== 'Apple'){
//       removedApples.push(array[i]);
//     }
//   }
//   return removedApples;
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Orange', 'Banana']))
// console.log(removeApples(['Banana', 'Orange', 'Apple']))


// Solution 2: Array 'filter'

// const removeApples = (array) => {
//   return array.filter((array) => array !== 'Apple')
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Orange', 'Banana']))
// console.log(removeApples(['Banana', 'Orange', 'Apple']))

// Q11 Filter out all the falsy values

// Solution 1: For Loop

const filterOutFalsy = (array) => {
  let filteredOutFalsy = [];
  for (let i = 0; i < array.length; i++){
    if (!!array[i] === true){
      filteredOutFalsy.push(array[i]);
    }
  }
  return filteredOutFalsy;
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple']))

// Solution 2: Array 'filter'

// const filterOutFalsy = (array) => {
//   return array.filter((array) => !!array === true) 
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
// console.log(filterOutFalsy(["Tomato", "Orange", "Banana", false]));
// console.log(filterOutFalsy(["Banana", "Orange", "Apple"]));

// Q12 Truthy to true, Falsy to false
// Given an array of truthy and falsy values, return the same array of elements into its boolean value

const convertToBoolean = (array) => {
  return array.map(array => !!array)}

console.log(convertToBoolean([500, 0, "David", "", []]))