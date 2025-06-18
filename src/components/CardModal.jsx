import React from "react";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gradient-to-r from-[#4e4c5e] via-[#0f0e16] to-[#040407] p-4 rounded shadow-lg max-w-md w-full text-black relative transform transition-transform duration-300 ">
        <button onClick={onClose} className="absolute top-2 right-2 text-[#ffffff] font-bold">
          ✕
        </button>
        
        <img src={card.image} alt={card.name} className="w-full rounded mb-4" />
        <h2 className="text-xl font-bold text-[#ffffff] ">{card.name}</h2>
        <p>{card.subname}</p>
      </div>
    </div>
  );
};

export default CardModal;
