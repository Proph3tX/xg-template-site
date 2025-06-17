// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

const memberColors = {
  Chisa: "#facc15",     // yellow-400
  Hinata: "#7dd3fc",    // sky-300
  Jurin: "#9ca3af",     // gray-400
  Harvey: "#c084fc",    // purple-400
  Juria: "#fb923c",     // orange-400
  Maya: "#ef4444",      // red-500
  Cocona: "#4ade80",    // green-400
};

function CardGrid({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-center">XG Photocard Tracker</h1>
        </div>
        {data.map((member) => (
          <div key={member.member}>
            <h2
              style={{
                color: memberColors[member.member] || "#fff",
                fontSize: "2rem",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className="font-bold mb-4"
            >
              {member.member}
            </h2>
            <div className="grid grid-cols-8 gap-6">
              {member.cards.map((card) => (
                <div key={card.id} className="w-full flex flex-col items-center">
                  <Card card={card} />
                  <div className="text-center text-sm mt-1">
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
