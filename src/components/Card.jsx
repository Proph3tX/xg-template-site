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
      className={`cursor-pointer border-2 rounded-lg p-2 transition-all duration-300 card-hover ${
        owned ? "border-green-400" : "border-gray-700"
      }`}
    >
      <img
        src={card.image}
        alt={card.name}
        style={{ width: '100%', height: 'auto', aspectRatio: '7 / 10' }}
        className="object-cover rounded mb-2 mx-auto"
      />
      <p className="text-center text-sm">{card.name}</p>
    </div>
  );
}

export default Card;