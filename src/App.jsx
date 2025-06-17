// src/App.jsx
import React, { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import xgCards from "./data/xgCards.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">XG Photocard Tracker </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <CardGrid data={xgCards} />
    </div>
  );
}

export default App;
