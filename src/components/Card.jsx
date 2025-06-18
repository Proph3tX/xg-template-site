// src/components/Card.jsx
import React from "react";

function Card({ card, onClick }) {
  const cardNameClass = `card-name era-${(card.era || "")
    .replace(/\s+/g, "")
    .toLowerCase()}`;

  const borderClass = `member-${(card.member || "").toLowerCase()}`;

  return (
    <div
      onClick={() => onClick(card)}
      className={`cursor-pointer transition-transform duration-300 hover:scale-105 rounded overflow-hidden ${borderClass}`}
      style={{
        borderRadius: "0.5rem",
      }}
    >
      <div
        className="shadow-lg rounded-t"
        style={{
          boxShadow: "0 0 15px rgba(0, 0, 0, 10)",
        }}
      >
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className="px-.1 pt-.5 pb-3 text-center">
        <p className={`text-base font-bold ${cardNameClass}`}>{card.name}</p>
        <p className="text-sm mt-3 text-gray-400">{card.subname}</p>
      </div>
    </div>
  );
}

export default Card;
