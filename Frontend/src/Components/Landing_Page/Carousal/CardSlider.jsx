// CardSlider.js
import React, { useState } from "react";

const CardSlider = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <div className="flex space-x-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transform transition-transform duration-300 ${
                index === currentCard ? "scale-100" : "scale-90"
              }`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="flex block justify-center items-center space-x-4">
        <button onClick={prevCard} className="text-gray-500 text-2xl">
          &lt;
        </button>
        <button
          onClick={nextCard}
          className="text-gray-500 text-2xl overflow-hidden"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

function CardSliderC() {
  const cards = [
    <div className="bg-blue-200 w-48 h-48">Card 1</div>,
    <div className="bg-green-200 w-48 h-48">Card 2</div>,
    <div className="bg-yellow-200 w-48 h-48">Card 3</div>,
    <div className="bg-red-200 w-48 h-48">Card 4</div>,
    <div className="bg-blue-200 w-48 h-48">Card 1</div>,
    <div className="bg-green-200 w-48 h-48">Card 2</div>,
    <div className="bg-yellow-200 w-48 h-48">Card 3</div>,
    <div className="bg-red-200 w-48 h-48">Card 4</div>,
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <CardSlider cards={cards} />
    </div>
  );
}

export default CardSliderC;
