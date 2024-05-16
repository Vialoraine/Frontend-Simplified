// Q1

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(3,2))
console.log(addition(-3,-6))
console.log(addition(7,3))

// Q2

const hoursIntoSeconds = (hour) => {
  return hour * 3600
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

// Q3

const calcPerimeter = (len, wid) => {
  return 2 * (len + wid)
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20,10))
console.log(calcPerimeter(2,9))

// Q4

const calcTriangeArea = (base, height) => {
  return .5 * base * height
}

console.log(calcTriangeArea(3,2))
console.log(calcTriangeArea(10,10))
console.log(calcTriangeArea(20,20))

// Q5

const appendFrontend = (str) => {
  return str + 'Frontend'
}

console.log(appendFrontend("Apple"))
console.log(appendFrontend("Banana"))
console.log(appendFrontend("Orange"))

// Q6

const sumGreaterThan100 = (num1, num2) => {
  return num1 + num2 > 100 ? true : false
}

console.log(sumGreaterThan100(20,10))
console.log(sumGreaterThan100(50,60))
console.log(sumGreaterThan100(100,-50))

// Q7

const lessThanOrEqualToZero = (num) => {
  return (num <= 0) ? true : false
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

// Q8

const oppositBoolean = (bool) => {
  return !bool
}

console.log(oppositBoolean(true))
console.log(oppositBoolean(false))

// Q9

const isNotZero = (num) => {
  return (num !== 0 ? true : false)
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

// Q10

const calcRemainder = (num1, num2) => {
  return num1 % num2
}

console.log(calcRemainder(4,2))
console.log(calcRemainder(7,8))
console.log(calcRemainder(9,8))

// Q11

const isOdd = (num) => {
  return num % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

// Q12

const booleanInteger = (num) => {
  return num % 2 === 0 ? 1 : -1 
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

// Q13

const isLoggedInAndSubscribed = (login, sub) => {
  return login === "LOGGED_IN" && sub === "SUBSCRIBED" ? true : false
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', "SUBSCRIBED"))
console.log(isLoggedInAndSubscribed('LOGGED_IN', "UNSUBSCRIBED"))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', "SUBSCRIBED"))

// Q14

const isLoggedInOrSubscribed = (login, sub) => {
  return login === "LOGGED_IN" || sub === "SUBSCRIBED" ? true : false;
};

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));