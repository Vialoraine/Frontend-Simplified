// STRINGS

// Exercise find the correct index for the letter 'd' below

console.log('Hello World'[10]) 
// => will console log 'd'

console.log('12345'.length)
// => will console log the length of the data string

let str = 'David'
// => stores variable
console.log(str[0])
// => will console log 'd'
console.log(str.length)
// => will console log the length of the data string
console.log(str[str.length - 1])
// will give us the last index of any string


// Example of Comments 
// Console log the numbers 1 to 3
console.log('123')

/**
 * explaining
 * more details
 * of whatever 
 */ 

// Variable Naming
let name = 'David'
// defines the variable name as 'David'
let fullName = 'David Bragg'
// camelcase

// example
let isRaining = true
let temperature = 20
let planet = 'Earth'

temperature = temperature + 2

console.log(temperature)
// will console log => 22

// using const will not let us reassign a variable
// using let will let us reassign a variable

// Converting Temperatures
// Celsius-to-Farenheit formula =>

//   F = C x 1.8 + 32

//   let celsius = 10;
//   let farenheit =
//   <!-- => converts celcius into fahrenheit -->

//   console.log()
//   <!-- print out result -->
  
let celcius = 10;
let farenheit = (celcius * 1.8 +32)

console.log(farenheit)

// Equality Examples

// one = reassigns a value to a variable
// let firstName = 'David'
// firstName = 'Bragg'

// two == doublechecks the value
// let bool = '1' == 1

// console.log(bool)
// will console log true

// three === doublechecks the value and type
let bool = '1' === 1

console.log(bool)
// will console log false because the left and right data is not the same value and type


