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
      className="cursor-pointer transition-all duration-300 w-full max-w-[150px]"
    >
      <div className="rounded-lg overflow-hidden shadow-[0_0px_10px_rgba(197,197,197,.1)] transition-transform duration-300 hover:scale-110 hover:z-10">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-auto block"
          style={{ aspectRatio: '6.5 / 10' }}
        />
      </div>
      <p className={`card-name era-${card.era.replace(/\s+/g, '').toLowerCase()}`}>{card.name}</p>
      <p className="card-subname">{card.subname}</p>
    </div>
  );
}

export default Card;
