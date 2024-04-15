// Q: console.log('Hello World') and log the last character of the string
// A: console.log('Hello World'[10]);

/*  Q: Converting Temperatures
    Celsius to Fahrenheit formula => F = C x 1.8 +32

      let celcius = 10;
      let fahrenheit = => convert celcius to fahrenheit

      console.log() => print out the result
    A:  
    let celcius = 10
    let fahrenheit = celcius * 1.8 + 32
    console.log(fahrenheit)
*/ 

/*  Q: Using JavaScript in the string print, print the change total values for the
       following statements:
    A:
    let cash = 60
    let price = 40
    let difference = cash - price

    if (cash > price) {
      console.log(`you paid extra - here's ${difference} dollars change`);
    } else if (cash === price) 
    {
      console.log("you paid the exact amount, have a nice day!");
    } else {
      console.log(`not enough money - you still owe ${difference} dollars`);
    }
*/

/*  Q: 'give reciept' : 'do not give reciept'
    A:
    let cash = 50;
    let price = 40;
    let isStoreOpen = true;

    let str = cash>= price && isStoreOpen ? 'give reciept' : 'do not give reciept'
    console.log(str)
*/

/*  Q: Using a while loop, print 100 times
    A:
    let count = 1
    
    while (count <= 100) {
      console.log(count) 
      count = count + 1
    }
*/

/*  Q:  Write a for-loop that loops through 1 to 20
        If the number is divisible by 3, print "Frontend"
        If the number is divisible by 5, print "Simplified"
        If the number is divisible by 3 and 5, print "Frontend Simplified"
        If the number is NOT divisible by either 3 or 5, print the number
    A:
    // My Answer
    for (let i = 1; i <= 20; i++){
      if (i % 3 === 0 && i % 5 === 0){
        console.log('Frontend Simplified')
      }
      else if (i % 3 === 0){
        console.log('Frontend')
      }
      else if (i % 5 === 0) {
        console.log('Simplified')
      }
      else {
        console.log(i)
      }
    }
    // Actual Answer
        for (let i = 1; i <= 20; i++){
      if (i % 3 === 0 && i % 5 === 0){
        console.log(`$[i] -> Frontend Simplified`)
      }
      else if (i % 3 === 0){
        console.log(`$[i] -> Frontend`)
      }
      else if (i % 5 === 0) {
        console.log(`$[i] -> Simplified`)
      }
      else {
        console.log(`$[i] -> $[i]`)
      }
    }
*/

/*  Q:  Print out every character from the string: "Frontend Simplified"
        Example:
        'F'
        'R'
        ...
        'D'
    A:
    let str = "Frontend Simplified"

    for (let i = 0;i <= str.length; i++){
      console.log(str[i])
    } 
*/

/*  Q:  Create a function that converts Celcius to Fahrenheit
        
        Celcius to Fahrenheit formula => F = C x 1.8 + 32

        convertCelciusToFahrenheit(0) -> 32
        convertCelciusToFahrenheit(10) -> 50
        convertCelciusToFahrenheit(30) -> 86
    A:
    function convertCelciusToFahrenheit(celcius) {
      return celcius * 1.8 + 32
    }

    console.log(convertCelciusToFahrenheit(0));
    console.log(convertCelciusToFahrenheit(10));
    console.log(convertCelciusToFahrenheit(30));
*/

/* Q: Filter out all the 'FAIL' elements in an array

      ['A+', 'A', 'FAIL'] => ['A+', 'A']
      ['FAIL', 'FAIL', 'B'] => ['B']
      ['FAIL'] => []
    A:
    function convertCelciusToFahrenheit(celcius) {
      return celcius * 1.8 + 32
    }

    let grades = ['A+', 'A', 'FAIL']

    let goodGrades = grades.filter((element) => {
      console.log(element)
      if (element != 'FAIL') {
        return true
      }
    })

    console.log(goodGrades)

    A: Better Solution:
    let grades = ["A+", "A", "FAIL"];

    let goodGrades = grades.filter(element => {
      return element != 'FAIL'
    })

    console.log(goodGrades);

    A: Optomized Solution:
    let grades = ["A+", "A", "FAIL"];

    let goodGrades = grades.filter(element => element != 'FAIL')

    console.log(goodGrades);

*/

/* Q: Filter out all the 'FAIL' elements in an array using a for loop

      ['A+', 'A', 'FAIL'] => ['A+', 'A']
      ['FAIL', 'FAIL', 'B'] => ['B']
      ['FAIL'] => []

    let grades = ["A+", "A", "FAIL"];

    // Create a new empty array called 'goodGrades'

      for (let i = 0; i < grades.length; i++) {
    // Add the current elemet onto 'goodGrades' only if
    // The current element is not equal to 'FAIL'
      console.log(grades[i]);
    }

    // Console log 'goodGrades'

    A:
    function convertCelciusToFahrenheit(celcius) {
      return celcius * 1.8 + 32
    }

    let grades = ['A+', 'A', 'FAIL']

    let goodGrades = grades.filter((element) => {
      console.log(element)
      if (element != 'FAIL') {
        return true
      }
    })

    console.log(goodGrades)

    A: Better Solution:
    let grades = ["A+", "A", "FAIL"];

    let goodGrades = grades.filter(element => {
      return element != 'FAIL'
    })

    console.log(goodGrades);

    A: Optomized Solution:
    let grades = ["A+", "A", "FAIL"];

    let goodGrades = grades.filter(element => element != 'FAIL')

    console.log(goodGrades);

*/

/* Q: Turn each element in an arrray of dollars into cents

      [1, 5, 10, 3] => [100, 500, 1000, 300]
      [0, 10, 20] => [0, 1000, 2000]

    A:

    let dollars = [1, 5, 10, 3];
    let cents = dollars.map((dollars) => {
      return dollars * 100
    })

    console.log(cents)
    
    A: Optimized

    let dollars = [1, 5, 10, 3];
    let cents = dollars.map(dollars => dollars * 100)

    console.log(cents)

    A: For Loop, without using map method
    
    let dollars = [1, 5, 10, 3];
    let cents = [];

    for (let i = 0; i < dollars.length; i++) {
      cents.push(dollars[i] * 100);
    }

    console.log(cents);
*/

/* Q: Create a register function that accepts:

      username
      email
      password
      subscriptionStatus
      discordId
      lessonsCompleted

      Inside your register function:
        1) Create a user object
        2) Push this user

    A:
    let users = [
      {
        userName: "user1",
        email: "user1@frontendsimplified.com",
        password: "user1test123",
        subscriptionStatus: "VIP",
        discordId: "user1#0001",
        lessonsCompleted: [0, 1],
      },
      {
        userName: "user2",
        email: "user2@frontendsimplified.com",
        password: "user2test123",
        subscriptionStatus: "VIP",
        discordId: "user2#0001",
        lessonsCompleted: [0, 1, 3],
      },
    ];

    function register(user) {
      users.push(user);
    }

    register({
      username: "user3",
      email: "user3@frontendsimplified.com",
      password: "user3test123",
      subscriptionStatus: "VIP",
      discordId: "user3#0001",
      lessonsCompleted: "[0,1]",
    });

    // log the new user in
    console.log(users);
*/

/*  Q:  Create a function that changes h1 red
        
        document.querySelector('.title').style.fontSize = '28px'

        function changeTitleToRed() {
          console.log('clicked');
        }

    A:
    document.querySelector(".title").style.fontSize = "28px";

    function changeTitleToRed() {
      document.querySelector(".title").style.color = "red"
      console.log('clicked');
    }
*/

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme");
}
