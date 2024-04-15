// Q1: Return the Sum of Two Numbers
// Create a function that takes two arguments as functions and return their sum

// addition(3, 2) -> 5
// addition(-3, -6) -> -9
// addition(7, 3) -> 10

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// Q2: Convert Hours into Seconds
// Create a function that converts hours into seconds

// hoursIntoSeconds(2) -> 7200
// hoursIntoSeconds(10) -> 36000
// hoursIntoSeconds(24) -> 86400

// My solution:
function hoursIntoSeconds(hours) {
  let seconds = hours * 3600;
  return seconds;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Actual solution:
function hoursIntoSeconds(hour) {
  let minutes = hour * 60;
  let seconds = minutes * 60;
  return seconds;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Q3: Calculate the Perimeter of a Rectangle
// Create a function that length and width of a rectangle and return it's perimeter
// Formula to calculate Perimeter = 2(w+h)

// calcPerimeter(6, 7) -> 26
// calcPerimeter(20, 10) -> 60
// calcPerimeter(2, 9) -> 22

function calcPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

// Q4: Calculate the Area of a Triangle
// Write a function that takes the base and heigh of a triangle and return its area

// calcTriangleArea(3,2) -> 3
// calcTriangleArea(10,10) -> 50
// calcTriangleArea(20,20) -> 200

// Take in two arguments, base and height
// Formula to calculate Area = .5 x base x height
// Return the answer and console.log it

// My Solution:
function calcTriangleArea(base, height) {
  let baseLength = base * 0.5;
  let area = baseLength * height;
  return area;
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(2, 9));

// Actual Solution:
function calcTriangleArea(base, height) {
  return (1 / 2) * base * height;
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(2, 9));

// Q5: Extend a String
// Write a function that accepts a string and adds 'Frontend' onto the end of it

// appendFrontend('Apple') -> "AppleFrontend"
// appendFrontend('Banana') -> "BananaFrontend"
// appendFrontend('Orange') ->"OrangeFrontend"

// Accept a string
// Adding strings is similar to adding numbers
// Don't forget to return your result

function appendFrontend(str) {
  return str + "Frontend";
}

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

// Q6: Greater than 100?
// Given two numbers, return true if the sum of both numbers is greater than 100
// Otherwise, return false

// sumGreaterThan100(20,10) -> false
// sumGreaterThan100(50,60) -> true
// sumGreaterThan100(100,-50) -> false

// My Solution:
function sumGreaterThan100(num1, num2) {
  let sumGreaterThan100 = num1 + num2;
  if (sumGreaterThan100 > 100) {
    return true;
  } else sumGreaterThan100 < 100;
  return false;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

// Actual Solution:
function sumGreaterThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  }
  return false;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

// Better Solutuion:
function sumGreaterThan100(num1, num2) {
  return num1 + num2 >= 100
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

// Q7: Less than or Equal to Zero?
// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

// lessThanOrEqualToZero(3) -> false
// lessThanOrEqualToZero(0) -> true
// lessThanOrEqualToZero(-2) -> true

// Tip: Use the less than or equal to operator

function lessThanOrEqualToZero(num) {
  return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// Q8: Oppossite boolean
// Given a boolean (true or false), return the opposite boolean

// oppositeBoolean(true) -> false
// oppositeBoolean(false) -> true

// My Solution
function oppositeBoolean(bool) {
  if (boolean = bool === true) {
    return boolean === false
  }
    return true
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// Actual Solution
function oppositeBoolean(bool) {
  return !bool;
  //retun !bool => return opposite of bool
}
console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

// Q9: Is not the number 0
// Given ANY element, return true if it is NOT the number 0

// isNotZero(5) -> true
// isNotZero(0) -> false
// isNotZero(null) -> true

function isNotZero(num) {
 return num !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0));
console.log(isNotZero(null));

// Q10: Calculate the remainder
// Given two numbers, return their remainder when divided by each other

// calcRemainder(4, 2) -> 0
// calcRemainder(7, 8) -> 7
// calcRemainder(9, 8) -> 1

function calcRemainder(num1, num2) {
  return num1 % num2
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Q11: Is the number odd?
// Given two numbers, return true if the number is odd

// isOdd(1) -> true
// isOdd(2) -> false
// isOdd(3) -> true

// My Solution: gives num is true if theres a remainder but calculates remainder

// console.log(isOdd(1))
// console.log(isOdd(2));
// console.log(isOdd(3));

// Actual Solution:
function isOdd(num) {
  if (num % 2 !== 0) {
    return false;
  }
  return true;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Better Solution:
function isOdd(num) {
  return num % 2 !== 0
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Q12: If a number is even, return 1 otherwise return -1
// Create a function that takes a number argument and returns 1 if the number is even. If the number is off return -1/

// booleanInteger(1) -> -1
// booleanInteger(2) -> 1
// booleanInteger(5) -> -1

// My Solution
function booleanInteger(num) {
  if (num % 2 === 0) {
    return 1
  }
  return -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2));
console.log(booleanInteger(3));

// Actual Solution/Better Solution
function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(3));

// Q13: Check if a user is logged in AND subscribed
// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

// isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
// isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
// isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

// My Solution
// function isLoggedInAndSubscribed(login, subscribe) {
//   if (login === 'LOGGED_IN' && subscribe === 'SUBSCRIBED') {
//     return true
//   }
//   return false
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
// console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Actual Solution/Better Solution

// function isLoggedInAndSubscribed(login, subscribe) {
//   return (login === 'LOGGED_IN') && (subscribe === 'SUBSCRIBED')
//  }

//  console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
//  console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
//  console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Q14: Check if a user is logged in OR subscribed
// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

// isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
// isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
// isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')}

 console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
 console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
 console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));