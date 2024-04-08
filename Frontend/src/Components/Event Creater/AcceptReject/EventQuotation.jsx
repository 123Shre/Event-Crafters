import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventQuotations = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleAcceptQuotation = async (eventId, quotationId) => {
    try {
      await axios.post('/api/events/accept-quotation', { eventId, quotationId });
      // Handle successful acceptance (e.g., show a success message)
    } catch (error) {
      console.error('Error accepting quotation:', error);
    }
  };

  const handleRejectQuotation = async (eventId, quotationId) => {
    try {
      await axios.post('/api/events/reject-quotation', { eventId, quotationId });
      // Handle successful rejection (e.g., show a success message)
    } catch (error) {
      console.error('Error rejecting quotation:', error);
    }
  };

  return (
    <div>
      <h2>Event Quotations</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.name}</h3>
          {event.quotations.map((quotation) => (
            <div key={quotation._id}>
              <p>Service: {quotation.serviceName}</p>
              <p>Amount: {quotation.amount}</p>
              <p>Service Provider: {quotation.serviceProvidedBy.name}</p>
              <button onClick={() => handleAcceptQuotation(event._id, quotation._id)}>
                Accept
              </button>
              <button onClick={() => handleRejectQuotation(event._id, quotation._id)}>
                Reject
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventQuotations;