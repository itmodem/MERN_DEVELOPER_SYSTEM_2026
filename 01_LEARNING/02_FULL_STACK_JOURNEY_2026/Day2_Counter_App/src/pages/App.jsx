import React, { useState } from "react";
import Greeting from "../components/Greeting";

function App() {
  const [name, setName] = useState("World");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-700 text-white">
      <Greeting name={name} />
      <input
        className="mt-6 px-4 py-2 rounded-lg border border-white bg-blue-600 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
