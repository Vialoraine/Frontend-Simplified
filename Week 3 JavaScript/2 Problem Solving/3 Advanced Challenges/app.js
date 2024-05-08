// Q1:

const showRating = (num) => {
  let ratings = "";

  for (let i = 0; i < Math.floor(num); i++) {
    ratings += "*";

    if (i !== Math.floor(num)) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(num)) {
    ratings += " .";
  }
  return ratings;
};

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

// Q2:

const sortLowToHigh = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// Q3:

const sortHighToLow = (arr) => {
  return arr.sort((a, b) => b.price - a.price);
};

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// Q4:

// Q5:

const postsByUser = async (userId) => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await promise.json();

  const posts = res.filter((elem) => elem.userId === userId);
  return posts;
};

console.log(postsByUser(4));

// Q6:

const firstSixIncomplete = async (completed) => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await promise.json();

  const incomplete = response.filter(element => !element.completed).slice(0, 6)

  return incomplete;
};

console.log(firstSixIncomplete());
