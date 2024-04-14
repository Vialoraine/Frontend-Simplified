// Counting to 100

// console.log(1)
// ...
// console.log(100)

// DRY => Don't repeat yourself

// let count = 1
// console.log(count)
// count = count + 1;
// console.log(count)
// count = count + 1;

// let count = 1

// Counting to 100 using a while loop

// while (count <= 100) {
//   console.log(count)
//   count = count + 1; => count++
// }

// for (let i = 0; i < 100; i = i + 1) {
//   console.log(i + 1);
// }
// let i = 0 => starts log at 0
// i < 3 => runs the loop 3 times
// i = i + 1 is the same as i++ or ++i => logs the function however many times looped

// For Loop Exercise:
// Write a for-loop that loops through 1 to 20
// If the number is divisible by 3, print "Frontend"
// If the number is divisible by 5, print "Simplified"
// If the number is divisible by 3 and 5, print "Frontend Simplified"
// If the number is NOT divisible, print the number

// Example:
// 1 -> 1
// 2 -> 2
// 3 -> "Frontend"
// 4 -> 4
// 5 -> "Simplified"
// ...
// 15 -> "Frontend Simplified"
// ...
// 20 -> Simplified

// My answer => only console logs properly up to 5
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i === i % 3) {
//     console.log("Frontend");
//   }
//   if (i === i % 5) {
//     console.log("Simplified")
//   }
//   if (i === i % 3 && i === i % 5) {
//     console.log("Frontend Simplified")
//   }
// }

for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (0 === i % 3 && 0 === i % 5) {
    console.log(`${i} -> Frontend Simplified`);
  } 
  else if (0 === i % 3) {
    console.log(`${i} -> Frontend`);
  } 
  else if (0 === i % 5) {
    console.log(`${i} -> Simplified`);
  } 
  else {
    console.log(`${i} -> ${i}`);
  }
}
