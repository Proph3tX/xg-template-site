// src/components/FilterDropdown.jsx
import React from "react";

function FilterDropdown({ filters, setFilters, data }) {
  const uniqueValues = (category) => {
    const values = new Set();
    data.forEach((member) => {
      if (category === "Member") {
        values.add(member.member);
      } else {
        member.cards.forEach((card) => {
          values.add(card[category.toLowerCase()]);
        });
      }
    });
    return Array.from(values).filter(Boolean).sort();
  };

  const handleChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value === "" ? null : value,
    }));
  };

  const filterCategories = ["Member", "Era", "Type", "Subtype"];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filterCategories.map((category) => (
        <select
          key={category}
          value={filters[category] || ""}
          onChange={(e) => handleChange(category, e.target.value)}
          className=" bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-white px-4 py-2 rounded custom-select"
        >
            
          <option value="">{`All ${category}s`}</option>
          {uniqueValues(category).map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}

export default FilterDropdown;
