// Q1 Show rating
// Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

const showRating = (rating) => {
  // initialize an empty string
  let ratings = "";
  // loop through the rounded down rating
  for (let i = 0; i < Math.floor(rating); i++) {
    // add a star for every iteration
    ratings = ratings + "*";
    // if its not the last iteration, add a space
    if (i !== Math.floor(rating) - 1) {
      ratings = ratings + " ";
    }
  }
  // if the number is not an integer
  if (!Number.isInteger(rating)) {
    // add a full stop
    ratings = ratings + " .";
  }
  // return it
  return ratings;
};

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

// Q2 Sort by lowest to highest price
// Given an array of numbers, return the prices sorted by low to high

const sortLowToHigh = (array) => {
  return array.sort((a, b) => a - b);
};

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// Q3 Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low

const sortHighToLow = (numbers) => {
  return numbers.sort((a, b) => b.price - a.price);
};

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// Q4 Promises
// On YouTube, watch:

// "The Async Await Episode I Promised" - Fireship
// "Async Await JavaScript ES7" - Techsith (1.5x speed)
// "Async JS Crash Course - Callbacks, Promises, Async Await" - Travsery Media (1.5x speed)

// Q5 Find all the posts bt a single user
// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.

const postsByUser = async (userId) => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json()

  const posts = result.filter(element => element.userId === userId)

  console.log(posts)
};

postsByUser(4);

// Q6 First 6 Incomplete Todos
// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result

const firstSixIncomplete = async (completed) => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json()

  const incomplete = result.filter(element => !element.completed).slice(0, 6)

  console.log(incomplete)
}

firstSixIncomplete(6);