// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

function CardGrid({ data }) {
  return (
    <div className="space-y-8">
      {data.map((group) => (
        <div key={group.member}>
          <h2 className="text-xl font-semibold mb-4">{group.member}</h2>
          <div className="flex flex-wrap gap-4">
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
