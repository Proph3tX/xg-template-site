// src/App.jsx
import React, { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import FilterDropdown from "./components/FilterDropdown";
import xgCards from "./data/xgCards.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [filters, setFilters] = useState({
    Member: null,
    Era: null,
    Type: null,
    Subtype: null,
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full text-black dark:text-white transition-colors duration-300 relative">
      <div className="text-center text-3xl font-bold pt-6 mb-10 text-[#828196] ">XG Tracker</div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ position: "absolute", top: "1.5rem", right: "1rem", zIndex: 50 }}
        className="bg-gray-200 dark:bg-[#242135] text-black dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
       {darkMode ? "Light" : "Dark"}
      </button>

      <div className="flex justify-center mt-4">
        <FilterDropdown filters={filters} setFilters={setFilters} data={xgCards} />
      </div>

      <CardGrid data={xgCards} filters={filters} />
    </div>
  );
}

export default App;
