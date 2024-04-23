// Q1: Return the Sum of Two Numbers
// Create a function that takes two arguments as functions and return their sum.

//   addition(3, 2) -> 5
//   addition(-3, -6) -> -9
//   addition(7, 3) -> 10

// A: 

// function addition(num1, num2) {
//   return num1 + num2
// }

// console.log(addition(3, 2))
// console.log(addition(-3, -6))
// console.log(addition(7, 3))

// OR 

// const addition = (num1, num2) => {
//   return num1 + num2
// }

// console.log(addition(3, 2))
// console.log(addition(-3, -6))
// console.log(addition(7, 3))

// Q2: Convert Hours Into Seconds
// Create a function that converts hours into Seconds

//   hoursIntoSeconds(2) -> 7200
//   hoursIntoSeconds(10) -> 36000
//   hoursIntoSeconds(24) -> 86400

// A: 

// const (hoursIntoSeconds) = (hours) => {
//   return hours * (60 * 60)
// }

// console.log(hoursIntoSeconds(2))
// console.log(hoursIntoSeconds(10))
// console.log(hoursIntoSeconds(24))

// Q3: Calculate the Perimeter of a Rectangle
// Create a function that takes length and width of a rectangle and return it's perimeter

//   calcPerimeter(6,7) -> 26
//   calcPerimeter(20,10) -> 60
//   calcPerimeter(2,9) -> 22

// A: 

// const calcPerimeter = (length, width) => {
//   return 2 * (length + width)
// }

// console.log(calcPerimeter(6,7))
// console.log(calcPerimeter(20,10))
// console.log(calcPerimeter(2,9))

// Q4: Calculate the Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area. 

//   calcTriangleArea(3,2) -> 3
//   calcTriangleArea(10,10) -> 50
//   calcTriangleArea(20,20) -> 200

// Take in two arguments: base and height
// Formula to calculate area is .5 * base * height
// Return the answer and console.log it

// A: 

// const calcTriangleArea = (base, height) => {
//   return .5 * base * height 
// }

// console.log(calcTriangleArea(3,2))
// console.log(calcTriangleArea(10,10))
// console.log(calcTriangleArea(20,20))

// Q5: Extend a String
// Write a function that accepts a string and adds 'Frontend' onto the end of it. 

//   appendFrontend('Apple') -> "AppleFrontend"
//   appendFrontend('Banana') -> "BananaFrontend"
//   appendFrontend('Orange') -> "OrangeFrontend"

// Accept a string 
// Adding strings is similar to adding numbers
// Don't forget to return your result

// A: 

// function appendFrontend(string) {
//   return string + 'Frontend'
// }

// console.log(appendFrontend('Apple'))
// console.log(appendFrontend('Banana'))
// console.log(appendFrontend('Orange'))

// Q6: Greater than 100?
// Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false. 

//   sumGreaterThan100(20,10) -> false
//   sumGreaterThan100(50,60) -> true
//   sumGreaterThan100(100,-50) -> false

// A: 

// const sumGreaterThan100 = (num1, num2) => {
//   if (num1 + num2 > 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(sumGreaterThan100(20,10))
// console.log(sumGreaterThan100(50,60))
// console.log(sumGreaterThan100(100,-50))

// Q7: Less than or Equal to Zero
// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise return false.

//   lessThanOrEqualToZero(3) -> false
//   lessThanOrEqualToZero(0) -> true
//   lessThanOrEqualToZero(-2) -> true

// Tip: Use the less than or equal to operator

// A: 

// const lessThanOrEqualToZero = (num) => {
//   if (num <= 0) {
//     return true
//   } 
//   return false;
// }

// console.log(lessThanOrEqualToZero(3))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))

// Q8: Opposite boolean 
// Given a boolean(true or false), return the opposite boolean.

//   oppositeBoolean(true) -> false 
//   oppositeBoolean(false) -> true 

// A:

// oppositeBoolean = (boolean) => {
//   return !boolean
// }

// console.log(oppositeBoolean(true))
// console.log(oppositeBoolean(false))

// Q9: Is not the number 0
// Given ANY element, return true if it is NOT the number 0.

//   isNotZero(5) -> true
//   isNotZero(0) -> false
//   isNotZero(null) -> true

// A: 

// const isNotZero = (num) => {
//   if (num !== 0){
//     return true
//   }
//   return false
// }

// console.log(isNotZero(5))
// console.log(isNotZero(0))
// console.log(isNotZero(null))

// OR 

// const isNotZero = (num) => {
//   return (num !== 0) ? true : false
// };

// console.log(isNotZero(5));
// console.log(isNotZero(0));
// console.log(isNotZero(null));

// Q10: Calculate the remainder
// Given two numbers, return their remainder when divided by each other

//   calcRemainder(4,2) -> 0
//   calcRemainder(7,8) -> 7
//   calcRemainder(9,8) -> 1

// A: 

// const calcRemainder = (num1, num2) => {
//   return num1 % num2
// }

// console.log(calcRemainder(4,2))
// console.log(calcRemainder(7,8))
// console.log(calcRemainder(9,8))

// Q11: Is the number odd?
// Given two numbers, return true if the number is odd

//   isOdd(1) -> true
//   isOdd(2) -> false
//   isOdd(3) -> true

// A: 

// const isOdd = (num) => {
//   return num % 2 !== 0
// }

// console.log(isOdd(1))
// console.log(isOdd(2))
// console.log(isOdd(3))

// Q12: If a number is even, return 1 otherwise return -1
// Create a function that takes a number argument and returns 1 if the number is even. If the number is odd return -1.

//   booleanInteger(1) -> -1
//   booleanInteger(2) -> 1
//   booleanInteger(5) -> -1

// A: 

// const booleanInteger = (num) => {
//   return (num % 2 === 0) ? 1 : -1
// }

// console.log(booleanInteger(1))
// console.log(booleanInteger(2))
// console.log(booleanInteger(5))

// Q13: Check if a user is logged in AND subscribed
// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCIBED' return true, otherwise return false.

//   isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
//   isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
//   isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

// A: 

// const isLoggedInAndSubscribed = (login, subscribe) => {
//   return (login === 'LOGGED_IN') && (subscribe === 'SUBSCRIBED')
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
// console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
// console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Q14: Check if a user is logged in OR subscribed
// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCIBED' return true, otherwise return false.

//   isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
//   isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
//   isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

// A: 

// const isLoggedInAndSubscribed = (login, subscribe) => {
//   return (login === 'LOGGED_IN') || (subscribe === 'SUBSCRIBED')
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
// console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
// console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

