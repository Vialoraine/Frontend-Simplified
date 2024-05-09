import { React, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((count) => count + 1);
  };

  const decrement = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="counter-wrapper">
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span className="counter__output">{counter}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
