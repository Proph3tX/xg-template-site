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
    <div className="min-h-screen w-full text-black dark:text-white p-4 transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <CardGrid data={xgCards} />
    </div>
  );
}

export default App;
