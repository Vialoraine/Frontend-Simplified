// How to use the data in the backend api
// fetch("https://jsonplaceholder.typicode.com/users/1")

// How to get access to the data: 2 ways
// 1. Then:

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//   console.log(response)
// })

// Making the backend compatible with the frontend

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   console.log(response.json());
// });

// Unlocking the promise and using the data

// const emailRef = document.querySelector(".email");

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// 2. Async/Await => best practice, runs line by line
// const emailRef = document.querySelector(".email");

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//   const data = await response.json()
//   emailRef.innerHTML = data.email
// }

// main();

// Creating a promise

const statusRef = document.querySelector('.status')

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP")
  })
}

// Method 1: Then
// getSubscriptionStatus().then(response => console.log(response))

// Method 2: Async
async function main() {
const status = (await getSubscriptionStatus())
statusRef.innerHTML = status
}

main();

