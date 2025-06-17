// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

function CardGrid({ data }) {
  return (
    <div className="space-y-12">
      {data.map((group) => (
        <div key={group.member}>
          <h2 className="text-xl font-semibold mb-4 text-center">{group.member}</h2>
          <div className="grid-container">
            {group.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
