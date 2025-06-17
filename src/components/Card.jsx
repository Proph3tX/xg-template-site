// src/components/Card.jsx
import React, { useState, useEffect } from "react";

function Card({ card }) {
  const [owned, setOwned] = useState(() => {
    return JSON.parse(localStorage.getItem(card.id)) || false;
  });

  useEffect(() => {
    localStorage.setItem(card.id, JSON.stringify(owned));
  }, [owned, card.id]);

  return (
    <div
      onClick={() => setOwned(!owned)}
      className="cursor-pointer transition-all duration-300 w-full max-w-[180px]"
    >
      <div className="p-2">
        <div
          className={`border-2 rounded-lg transition-shadow duration-300 hover:scale-110 hover:z-10 ${
            owned
              ? "border-green-400 shadow-[0_0px_2px_rgba(34,197,94,0.4)]"
              : "border-gray-700 shadow-[0_0px_15px_rgba(161,161,161,0.747)]"
          }`}
        >
          <img
            src={card.image}
            alt={card.name}
            style={{ width: '100%', height: 'auto' }}
            className="object-cover rounded mx-auto"
          />
        </div>
        <p className="text-center text-base font-bold leading-none mt-1 text-red-500">{card.name}</p>
        <p className="text-center text-sm mt-2 leading-none">{card.subname}</p>
      </div>
    </div>
  );
}

export default Card;
