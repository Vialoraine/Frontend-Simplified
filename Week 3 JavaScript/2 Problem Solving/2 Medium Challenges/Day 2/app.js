/*  Q1: Falsy or Truthy?
        Given two values, return the first one if it is falsy, other wise return the second one.

        filterOutFalsy(0, 500) -> 0
        filterOutFalsy(false, 100) -> false
        filterOutFalsy([true, 'Dog']) -> 'Dog' 


    A: 
    My Solution:

    function filterOutFalsy(value1, value2) {
      if (value1 !== 0){
        return value1
      }
      else {
        return value2
      }
    }

      console.log(filterOutFalsy(0, 500));
      console.log(filterOutFalsy(false, 100));

    Better Solution:

    function filterOutFalsy(value1, value2) {
      if (!value1){
        return value1
      }
      else {
        return value2
      }
    }

    console.log(filterOutFalsy(0, 500));
    console.log(filterOutFalsy(false, 100));

    Optimal Solution:

      function filterOutFalsy(value1, value2) {
        return !value1 ? value1 : value2
      }

      console.log(filterOutFalsy(0, 500));
      console.log(filterOutFalsy(false, 100));
    
*/

/*  Q2: Return the length of any given array
        Given an array, return its length

        arrLength([1, 2, 3]) -> 3
        arrLength([5, 0, -4, 1]) -> 4
        arrLength([]) -> 0


    A: 
    function arrLength(arr) {
      return arr.length;
    }

    console.log(arrLength([1, 2, 3]))
    console.log(arrLength([5, 0, -4, 1]));
    console.log(arrLength([]))
*/ 

/*  Q3: Get the last element of an array
        Given an array, return the last element

        lastElem([3, 2, 0, 6, 2]) -> 2
        lastElem(['dog', 'cat', 'ball']) -> 'ball'
        lastElem([null, 5, false]) -> false


    A: 
    function lastElem(arr) {
      return (arr[arr.length - 1])
    }

    console.log(lastElem([3, 2, 0, 6, 2]));
    console.log(lastElem(["dog", "cat", "ball"]));
    console.log(lastElem([null, 5, false]));
*/ 

/*  Q4: Find the sum of an array
        Given an array, return the sum of every element

        arrSum([2, 2, 2]) -> 6
        arrSum([100, 200, 500]) -> 800
        arrSum([0, -5, -10]) -> 6


    A: 
    function arrSum(arr) {
      let sum = 0
      for (let i = 0; i < arr.length; i++){
        // This is how you loop through every element in an array
        sum = sum + arr[i];
      }
      return sum;
    }

    console.log(arrSum([2, 2, 2]))
    console.log(arrSum([100, 200, 500]));
    console.log(arrSum([0, -5, -10]));
*/ 

/*  Q5: Add up the numbers from a single number
        Given a number, add up all the numbers from one to the number that is given

        Eg: An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

       progressiveSum(3) -> 6
       progressiveSum(4) -> 10
       progressiveSum(600) -> 180300

    A:
    function progressiveSum(num) {
      let sum = 0;
      for (let i= 1; i <= num; ++i){
        sum = sum + i;
      }
      return sum;
    }

    console.log(progressiveSum(3));
    console.log(progressiveSum(4));
    console.log(progressiveSum(600));
*/ 

/*  Q6: Calculate the time
        Given a number in seconds, return this number in mm:ss format

        calcTime(66) -> '01:06'
        calcTime(50) -> '00:50'
        calcTime(300) -> '05:00'

    A:      
    function calcTime(seconds) {
      let timerMinutes = Math.floor(seconds / 60);
      let timerSeconds = seconds % 60;

      if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
      }
      return timerMinutes + ':' + + timerSeconds;
    }

    console.log(calcTime(66));
    console.log(calcTime(50));
    console.log(calcTime(300));
*/ 


  