import React from "react";
import EventCard from "./EventCard";
const events = [
    {
      image: "event1.jpg",
      name: "Music Festival",
      price: 50,
      isFree: false,
      ageRestriction: "18+",
      handleViewDetails: () => console.log("View details for Music Festival"),
    },
    // ... more events
  ];

const Eventslist = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Add an event</button>
    </div>
  );
};

export default Eventslist;
