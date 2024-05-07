// Q1:

// const filterOutFalsy = (val1, val2) => {
//   if (val1 == false) {
//     return val1;
//   }
//   return val2;
// };

// console.log(filterOutFalsy(0, 500));
// console.log(filterOutFalsy(false, 100));
// console.log(filterOutFalsy(true, "Dog"));

// Q2:

const arrLength = (arr) => {
  return arr.length;
};

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// Q3:

const lastElem = (arr) => {
  return arr[arr.length - 1];
};

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

// Q4:

const arrSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Q5:

const progressiveSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

// Q6:

const calcTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const minStr = valueToString(min);
  const secStr = valueToString(sec);

  return minStr + ":" + secStr;
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

// Q7:

const getMax = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}

console.log(getMax([5,100,0]))
console.log(getMax([12,10,-20]))
console.log(getMax([-300,-100,-200]))

// Q8:

// Decrementing Loop
// const reverseString = str => {
//   let reversedStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i]
//   }
//   return reversedStr
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Incrementing Loop
// const reverseString = str => {
//   let reversedStr = ''

//   for (let i = 0; i < str.length; i++) {
//     reversedStr = str[i] + reversedStr;
//   }
//   return reversedStr
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Array Reverse

const reverseString = (str) => {
  return (strArr = str.split("").reverse().join(""));
};

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))

// Q9:

// For Loop
// const convertToZeros = arr => {
//   let zeroArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     zeroArr[i] = 0
//   }
//   return zeroArr
// }

// console.log(convertToZeros([5,100,0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1,2,3,4,5]))

// Arr Map
// const convertToZeros = arr => {
//   return arr.map(x => x = 0)
// }

// console.log(convertToZeros([5,100,0]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1,2,3,4,5]))

// Arr Fill
const convertToZeros = arr => {
  return arr.fill(0)
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))

// Q10:

// For Loop
// const removeApples = arr => {
//   let removedApp = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 'Apple') {
//       removedApp.push(arr[i])
//     }
//   }
//   return removedApp
// }

// console.log(removeApples(['Banana','Apple','Orange','Apple']))
// console.log(removeApples(['Tomato','Orange','Banana']))
// console.log(removeApples(['Banana','Orange','Apple']))

// Arr Filter
const removeApples = arr => {
  return arr.filter((word) => word !== 'Apple')
}

console.log(removeApples(['Banana','Apple','Orange','Apple']))
console.log(removeApples(['Tomato','Orange','Banana']))
console.log(removeApples(['Banana','Orange','Apple']))

// Q11:

// For Loop
// const filterOutFalsy = arr => {
//   let filteredArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!!arr[i] === true) {
//       filteredArr.push(arr[i])
//     }
//   }
//   return filteredArr
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, '0']))
// console.log(filterOutFalsy(['Tomato','Orange','Banana',false]))
// console.log(filterOutFalsy(['Banana','Orange','Apple']))

// Arr Filter
const filterOutFalsy = arr => {
  return arr.filter((word) => !!word === true)
}

console.log(filterOutFalsy(["", [], 0, null, undefined, '0']))
console.log(filterOutFalsy(['Tomato','Orange','Banana',false]))
console.log(filterOutFalsy(['Banana','Orange','Apple']))

// Q12:

const convertToBoolean = arr => {
  return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500,0,"David","",[]]))