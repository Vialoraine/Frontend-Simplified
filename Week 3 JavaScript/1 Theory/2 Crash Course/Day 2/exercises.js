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
