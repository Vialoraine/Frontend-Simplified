// Q1:

const addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// Q2:

const hoursIntoSeconds = (hours) => {
  return hours * 3600;
};

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Q3:

const calcPerimeter = (length, width) => {
  return 2 * (length + width);
};

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

// Q4:

const calcTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

// Q5:

const appendFrontend = (string) => {
  return `${string}Frontend`;
};

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

// Q6:

const sumGreaterThan100 = (num1, num2) => {
  if (num1 + num2 > 100) {
    return true;
  }
  return false;
};

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

// Q7:

const lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true;
  }
  return false;
};

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// Q8:

const oppositeBoolean = (bool) => {
  return !bool;
};

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

// Q9:

const isNotZero = (num) => {
  return num !== 0 ? true : false;
};

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

// Q10:

const calcRemainder = (num1, num2) => {
  return num1 % num2;
};

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Q11:

const isOdd = (num) => {
  return num % 2 === 0 ? false : true;
};

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Q12:

const booleanInteger = (num) => {
  return num % 2 === 0 ? 1 : -1;
};

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// Q13:

const isLoggedInAndSubscribed = (login, subscribe) => {
  return login === "LOGGED_IN" && subscribe === "SUBSCRIBED" ? true : false;
};

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Q14:

const isLoggedInOrSubscribed = (login, subscribe) => {
  return login === "LOGGED_IN" || subscribe === "SUBSCRIBED" ? true : false;
};

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));