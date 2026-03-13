import React from "react";

function Greeting({ name }) {
  return (
    <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mt-4">
      Hello, {name}! 👋
    </h1>
  );
}

export default Greeting;
