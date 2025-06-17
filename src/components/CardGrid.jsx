// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

function CardGrid({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1600px] flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {data.map((member) => (
          <div key={member.member}>
            <h2 className="text-2xl font-semibold mb-4">{member.member}</h2>
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
