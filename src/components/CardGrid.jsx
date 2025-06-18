// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";
import { useState } from "react";
import CardModal from "./CardModal";

const memberColors = {
  Chisa: "#facc15",     // yellow-400
  Hinata: "#7dd3fc",    // sky-300
  Jurin: "#9ca3af",     // gray-400
  Harvey: "#c084fc",    // purple-400
  Juria: "#fb923c",     // orange-400
  Maya: "#ef4444",      // red-500
  Cocona: "#4ade80",    // green-400
};

function CardGrid({ data, filters }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const filteredData = data
    .map((member) => {
      const filteredCards = member.cards.filter((card) => {
        return (
          (!filters.Member || member.member === filters.Member) &&
          (!filters.Era || card.era === filters.Era) &&
          (!filters.Type || card.type === filters.Type) &&
          (!filters.Subtype || card.subtype === filters.Subtype)
        );
      });

      return {
        ...member,
        cards: filteredCards,
      };
    })
    .filter((member) => member.cards.length > 0);

  const gridStyle = {
    display: "grid",
    gap: ".1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {filteredData.map((member) => (
          <div key={member.member}>
            <h2
              style={{
                color: memberColors[member.member] || "#fff",
                fontSize: "3rem",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              className="font-bold mb-4"
            >
              {member.member}
            </h2>
            <div style={gridStyle}>
              {member.cards.map((card) => (
                <div key={card.id} className="w-full flex flex-col items-center">
                  <Card card={card} onClick={() => setSelectedCard(card)} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
      </div>
    </div>
  );
}

export default CardGrid;
