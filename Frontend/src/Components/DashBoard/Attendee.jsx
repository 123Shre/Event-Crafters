import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Event Creater/EventCard2"; // Assuming the path to your Card component

const Attendee = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/eventCreater/allevents"
        ); // Replace with your actual API endpoint
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto">
      <h2>This is the Attendee page of the dashboard</h2>
      {events.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {events.map((event) => {
            // Extract date and time from the combined 'dateAndTime' property
            const handleClick = () => {
              setSelectedEvent(event); // Set the selected event on button click
            };
            const dateTime = new Date(event.dateAndTime);
            const formattedDate = dateTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const formattedTime = dateTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });

            return (
              <Card
                key={event._id} // Assuming events have a unique id
                eventname={event.name}
                date={formattedDate}
                time={formattedTime}
                location={event.cityName}
                event={event}
                onClick={handleClick}
              />
            );
          })}
        </div>
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default Attendee;
