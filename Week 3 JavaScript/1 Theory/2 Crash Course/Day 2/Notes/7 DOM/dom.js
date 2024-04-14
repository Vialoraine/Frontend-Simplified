// First way of accessing an element:
// console.log(document.querySelector('#title'));

// Second way of accessing an element => better practice:
// console.log(document.getElementById('title'))

// How to change the html of any element in the DOM:
// document.querySelector('#title').innerHTML = 'Frontend Simplified'
// changes #title => Frontend Simplified:

// document.querySelector('#title').innerHTML += 'Frontend Simplified'
// changes #title => David BraggFrontend Simplified

// document.querySelector('#title').innerHTML += 'Frontend Simplified'
// IS THE SAME AS BELOW =>
// document.querySelector("#title").innerHTML =
// document.querySelector("#title").innerHTML + "Frontend Simplified"

// Change CSS
// document.querySelector("#title").style.fontSize = '16px'
// changes #title font size to 16px

// Click Listener => changes #title to color red on click
// function changeTitleToRed() {
//   document.querySelector("#title").style.color = 'red';
//   console.log('clicked');
// }

// Click Listener => dark mode
function toggleDarkMode() {
  
 document.querySelector('body').classList.toggle("dark-theme")
}