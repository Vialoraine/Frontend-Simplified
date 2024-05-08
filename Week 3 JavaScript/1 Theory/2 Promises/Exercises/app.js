const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video")

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
}

// Exercise

// 1. Create a function called `getVideo`
// 2. Accept a parameter called `subscriptionStatus`
// 3. Return a new Promise inside of the function that:
//    - if "VIP" resolve("show video")
//    - if "FREE" resolve("show trailer")
//    - otherwise reject("no video")
// 4. console.log the result of getVideo(status) in main()

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  }
  catch(e) {
    console.log(e)
    videoRef.innerHTML = e;
    // uses the error
  }
}

main();
