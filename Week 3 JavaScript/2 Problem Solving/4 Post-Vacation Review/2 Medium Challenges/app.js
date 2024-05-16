// Q1 

// const filterOutFalsy = (el1, el2) => {
//   return el1 == 0 ? el1 : el2
// }

// console.log(filterOutFalsy(0, 500))
// console.log(filterOutFalsy(false, 100))
// console.log(filterOutFalsy(true, 'Dog'))

// Q2

const arrLength = (arr) => {
  return arr.length
}

console.log(arrLength([1,2,3]))
console.log(arrLength([5,0,-4,1]))
console.log(arrLength([]))

// Q3

const lastElem = (arr) => {
  return arr[arr.length -1]
}

console.log(lastElem([3,2,0,6,2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false]))

// Q4

const arrSum = (arr) => {
  const initialSum = 0;
  return sumWithInitial = arr.reduce((acc, currVal) => acc + currVal, initialSum)
}

console.log(arrSum([2,2,2]))
console.log(arrSum([100,200,500]))
console.log(arrSum([0,-5,-10]))

// Q5 

const progressiveSum = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))

// Q6

const calcTime = (seconds) => {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60

  let minStr = valueToString(min)
  let secStr = valueToString(sec)

  return minStr + ":" + secStr;
}

const valueToString = (num) => {
  if (num.toString().length <= 1) {
    return "0" + num.toString()
  }
  return num.toString()
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

// Q7

const getMax = (arr) => {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i]
    }
  }
  return largest
}

console.log(getMax([5,100,0]))
console.log(getMax([12,10,-20]))
console.log(getMax([-300,-100,-200]))

// Q8

// Incrementing Loop

// const reverseString = (str) => {
//   let reversed = ''

//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed
//   }
//   return reversed
// }

// console.log(reverseString("abc"));
// console.log(reverseString("David"));
// console.log(reverseString("This is cool"));

// Decrementing Loop

const reverseString = (str) => {
  let reversed = ''

  for (let i = str.length - 1 ; i >= 0 ; i--) {
    reversed = reversed + str[i]
  }
  return reversed
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

// Array Reverse

// const reverseString = (str) => {
//   let reversed = '';
//   return reversed = str.split('').reverse().join('')
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Q9

// For Loop

// const convertToZeros = (arr) => {
//   let converted = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     converted[i] = 0
//   }
//   return converted
// }

// console.log(convertToZeros([5,100,0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1,2,3,4,5]))

// Array "fill"

const convertToZeros = (arr) => {
  let converted = [];
  return converted = arr.fill(0)
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))

// Array "map"

// const convertToZeros = (arr) => {
//   let converted = [];
//   return converted = arr.map((el) => el = 0)
// }

// console.log(convertToZeros([5,100,0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1,2,3,4,5]))

// Q10

// For Loop

// const removeApples = (arr) => {
//   let removed = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "Apple") {
//       removed.push(arr[i])
//     }
//   }
//   return removed
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(removeApples(['Tomato','Orange', 'Banana']))
// console.log(removeApples(['Banana','Orange', 'Apple']))

// Array "filter"

const removeApples = (arr) => {
  let removed = [];

  return removed = arr.filter((el) => el !== "Apple" )
};

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato','Orange', 'Banana']))
console.log(removeApples(['Banana','Orange', 'Apple']))

// Q11

// For Loop

// const filterOutFalsy = (arr) => {
//   let filtered = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!!arr[i] === true) {
//       filtered.push(arr[i])
//     }
//   }
//   return filtered
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
// console.log(filterOutFalsy(['Tomato','Orange','Banana', false]))
// console.log(filterOutFalsy(["Banana", "Orange", "Apple"]))

// Array "filter"

const filterOutFalsy = (arr) => {
  return arr.filter((el) => !!el === true)
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsy(['Tomato','Orange','Banana', false]))
console.log(filterOutFalsy(["Banana", "Orange", "Apple"]))

// Q12

const convertToBoolean = (arr) => {
  return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500,0,'David',"",[]]))