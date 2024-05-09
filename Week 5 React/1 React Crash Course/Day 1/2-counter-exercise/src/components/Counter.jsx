// Create a "Counter.jsx" component
// Create a default `count` of 0
// Create a button to increment `count` by 1
// Create a button to decrement `count` by 1
// Import your Counter in App.jsx and test it

// Using Numbers in React: 

  // import { React, useState } from "react";

  // function Counter() {
  //   const [counter, setCounter] = useState(0);

  //   const increment = () => {
  //     setCounter((count) => count + 1);
  //   };

  //   const decrement = () => {
  //     setCounter((count) => count - 1);
  //   };

  //   return (
  //     <div className="counter-wrapper">
  //       <button className="decrement-btn" onClick={decrement}>
  //         -
  //       </button>
  //       <span className="counter__output">{counter}</span>
  //       <button className="increment-btn" onClick={increment}>
  //         +
  //       </button>
  //     </div>
  //   );
  // }

  // export default Counter;



// Using Arrays in React: with a Reset Button:

  // import { React, useState } from "react";

  // function Counter() {
  //   const [arr, setArr] = useState([]);

  //   function addPlus() {
  //     setArr((prevArr) => [...prevArr, "+"]);
  //   }

  //   function addMinus() {
  //     setArr((prevArr) => [...prevArr, "-"]);
  //   }

  //   function reset() {
  //     setArr([]);
  //   }

  //   return (
  //     <div className="counter-wrapper">
  //       <button onClick={addMinus}> - </button>
  //       <button onClick={addPlus}> + </button>
  //       <button onClick={reset}> Reset </button>
  //       {arr.toString()}
  //     </div>
  //   );
  // }

  // export default Counter;



// Using Objects in React:

  // 1. Use a callback to get the previous value
  // 2. Spread out all the properties of the previous state
  // 3. Only change the property that you need to change

  import { React, useState } from "react";

  function Counter() {
    const [cart, setCart] = useState({ item: "Apple", quantity: 0 });

    function addApple() {
      setCart((prevCart) => ({
        ...prevCart,
        quantity: prevCart.quantity + 1,
      }));
    }

    function remApple() {
      setCart((prevCart) => ({
        ...prevCart,
        quantity: prevCart.quantity - 1,
      }));
    }

    return (
      <div className="counter-wrapper">
        <button onClick={remApple}>-</button>
        {cart.quantity}
        {cart.item}
        <button onClick={addApple}>+</button>
      </div>
    );
  }

  export default Counter;
