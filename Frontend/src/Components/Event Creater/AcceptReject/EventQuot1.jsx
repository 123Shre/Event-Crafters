import React, { useEffect, useState } from "react";
import axios from "axios";
import QuotationList from "./EventQuotation";

const EventQuotations = () => {
  const [events, setEvents] = useState([]);
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/eventcreater/events",
          { email }
        );
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, [email]);

  const filterEvents = (events) => {
    const currentDate = new Date();
    return events.filter((event) => {
      const hasContracts = event.contracts && event.contracts.length > 0;
      const eventDate = new Date(event.date);
      const isUpcoming = eventDate > currentDate;

      return hasContracts || isUpcoming;
    });
  };

  const filteredEvents = filterEvents(events);

  return (
    <div>
      <h2>Event Quotations</h2>
      {filteredEvents.map((event) => (
        <div key={event._id}>
          <h1 className="text-3xl font-bold mt-5">{event.name}</h1>
          <QuotationList eventId={event._id} />
        </div>
      ))}
    </div>
  );
};

export default EventQuotations;