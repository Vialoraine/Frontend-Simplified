// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// let arr = [] => initializes an empty array

// let arr = [20, 30, 40, 50, 100];

// first element of array
// console.log(arr[0])

// last element of array
// console.log(arr[4]) => console.log(arr[arr.length -1])

// console.log(arr[arr.length -1])

// adding elements onto end of array
// arr.push(200)

// let newArr = arr.filter(element => {
//   console.log(element);
//   if (element < 50) {
//     return true;
//   }
// });

// console.log(newArr);

// IS THE SAME AS

// let newArray = arr.filter(element < 50)

// console.log(newArr);

// Arrays Exercise

// Filter out all the 'FAIL' elements in an array

// Examples
// ['A+','A', 'FAIL'] => ['A+', 'A']
// ['FAIL', 'FAIL', 'B'] => ['B']
// ['FAIL'] => []

// EXAMPLE 1:
// let grades = ['A+', 'A', 'FAIL'];

// let goodGrades = grades.filter((element) => {
//   console.log(element)
//   if (element !== 'FAIL') {
//     return true;
//   }
// })

// console.log(goodGrades)

// IS THE SAME AS

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// Example 2:
// let grades = ['FAIL', 'FAIL', 'B']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// Example 3:
// let grades = ['FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// Example 1: WITHOUT FILTER

// let grades = ["A+", "A", "FAIL"]

// Create a new empty array called 'goodGrades'

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//   if (grades[i] !== 'FAIL') {
//     goodGrades.push(grades[i])
//   }

// add the current element onto 'goodGrades' only if the current element is not equal to 'FAIL'

// }

// console.log(goodGrades);
// console log 'goodGrades'


