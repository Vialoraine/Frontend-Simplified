// const statusRef = document.querySelector(".status");

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//     emailRef.innerHTML = data.email
//   });
// });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// async function main() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );
//   const data = await response.json()
//   console.log(data);
//   emailRef.innerHTML = data.email;
// }

// main ()

// function getSubscriptionStatus() {
//   return new Promise((resolve, reject) => {
//     resolve("VIP");
//   });
// }

// async function main() {
//   console.log(await getSubscriptionStatus());
// }

// console.log(getSubscriptionStatus());

// getSubscriptionStatus().then(response => console.log(response))

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

const statusRef = document.querySelector(".status");

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

console.log(getSubscriptionStatus());

main();
