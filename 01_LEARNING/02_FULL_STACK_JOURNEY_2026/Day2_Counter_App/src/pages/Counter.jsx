import React from "react";

import { useState } from "react";

const Counter = () => {
  // state variables ko declare kiye
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  return (
    <div className="ml-7  ">
      <h1>React Counter App</h1>
      <h2>{count}</h2>
      <button
        className="bg-green-400 font-bold px-3 py-2 rounded-sm "
        onClick={increment}
      >
        Increment
      </button>

      <button
        className="bg-red-400 font-bold px-3 py-2 rounded-sm ml-3 "
        onClick={decrement}
      >
        Decrement
      </button>

      <button
        className="bg-yellow-400 px-3 py-2 font-bold rounded-sm ml-3 "
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
