import React, { useRef, useEffect, useState } from "react";
import Card from "../../Event Creater/EventCard2";
import CardSliderC from "../Carousal/CardSlider";


const EventCarousal = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleAutoScroll = () => {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

      // If we've scrolled all the way to the right
      if (
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollLeft = 0; // Reset to the beginning
      }
    };

    intervalRef.current = setInterval(handleAutoScroll, 2000); // Scroll every 2 seconds

    return () => {
      clearInterval(intervalRef.current); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <>
    <div className="relative overflow-hidden p-11">
      <div
        className="flex mt-0 mr-3  
        overflow-hidden scroll-smooth snap-x snap-mandatory"
        ref={carouselRef}
      >
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="11:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        <Card
          eventname="Arjit Singh Concert"
          date="12 October 2024"
          time="12:20"
          location="Pune,India"
          className="snap-start flex-shrink-0"
        />
        
      </div>
    </div>
    <TrendingGames />
    </>
  );
};

const TrendingGames = () => {
    const [activeCard, setActiveCard] = useState(0);
  
    const cards = [
      {
        title: "Dota 2",
        description: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-dota-2"
      },
      {
        title: "The Witcher 3",
        description: "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-the-witcher-3"
      },
      {
        title: "RDR 2",
        description: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-rdr-2"
      },
      {
        title: "PUBG Mobile",
        description: "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-pubg"
      },
      {
        title: "Fortnite",
        description: "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-fortnite"
      },
      {
        title: "Far Cry 5",
        description: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "bg-far-cry-5"
      }
    ];
  
    const handleNext = () => {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };
  
    const handlePrev = () => {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };
  
    return (
      <section className="game-section">
        <h2 className="line-title">Trending Games</h2>
        <div className="flex flex-row justify-center items-center mb-4">
          {cards.map((card, index) => (
             <Card
             eventname="Arjit Singh Concert"
             date="12 October 2024"
             time="12:20"
             location="Pune,India"
             className="snap-start flex-shrink-0"
           />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white bg-opacity-50 px-3 py-2 rounded-full focus:outline-none"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="bg-white bg-opacity-50 px-3 py-2 rounded-full focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
    );
  };
  
  
 
  

export default EventCarousal;