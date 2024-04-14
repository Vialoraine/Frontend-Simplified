// FES Conditional Example

// if logged in show the video
// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//   console.log('show the video')
// }
// if user is logged in and subscribed show the video
// else if (loggedIn === true) {
//   console.log('tell the user to upgrade their subscription')
// }
// if the user is logged then tell them to upgrade their subscription
// else {
//   console.log('tell user to log into account')
// }
// if the user is not logged in then tell them to log into their account

// Cash Example:

// let cash = 45
// let price = 40

// if (cash > price) {
//   console.log("you paid extra - here's " + 5 +" dollars change")
//   // => console.log(`you paid extra - here's ${5} dollars change)
// }
// else if (cash === price) {
//   console.log("you paid the exact amount, have a nice day")
// }
// else {
//   console.log("not enough money - you still owe x dollars")
// }

// Cash Exercise

// let cash = 100
// let price = 200
// let difference = cash - price

// if (cash > price) {
//   console.log(`you paid extra - here's the ${difference} dollars change`)
// }
// else if (cash===price) {
//   console.log("you paid the exact amount, have a nice day")
// }
// else {
//   console.log(`not enough money - you still owe ${price - cash} dollars`)
// }

// Logical Operators Example

// let cash = 50
// we have $50 cash
// let price = 40
// item costs $40
// let isStoreOpen = false
// store is open

// if (cash >= price) {
//   console.log(`we have enough cash to buy the products`)
// }
// => if we have enough cash to buy the product will log the statement

// if (cash >= price && isStoreOpen === true) {
//   console.log(`print the reciept`)
// }
// && => checks if the left and right conditionals are true and will log the statement
// => if we have enough cash to buy the product and the store is open log the statement

// if (cash >= price || isStoreOpen === true) {
//   console.log(`print the reciept`)
// }
// || => checks if atleast oneside of the comparision is true
// if atleast one conditional is true and will log the statement

// if (cash >= price && isStoreOpen === false) {
//   console.log(`print the reciept`)
// }

// is the same as

// if (cash >= price && !isStoreOpen)

// let val = "";

// if (val) {
//   console.log("truthy value", !!val)
// }
// else {
//   console.log("falsy value", !!val)
// }

// TERNARY OPERATORS

// let hot = true

// hot ? console.log('weather is hot out') : console.log('weather is cold')

// console logs weather is hot

// let hot = false

// hot ? console.log('weather is hot out') : console.log('weather is cold')
// console logs weather is cold

let subscribed = true
let loggedIn = true

subscribed && loggedIn ? 'show the video' : 'hide the video'
// if the user is subscribed and logged in show the video if not hide the video

// Ternary Exercise

let cash = 50
let price = 40
let isStoreOpen = true

// cash >= price && isStoreOpen ? console.log('give reciept') : console.log('do not give reciept') is the same as below

let str = cash >= price && isStoreOpen ? "give reciept" : "do not give reciept"
console.log(str)