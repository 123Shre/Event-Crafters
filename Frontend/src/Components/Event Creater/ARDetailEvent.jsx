import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetails = ({ eventId }) => {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get(`/api/quotations/${eventId}`);
        setQuotations(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately
      }
    };

    fetchQuotations();
  }, [eventId]);

  const handleAcceptQuote = async (quotationId) => {
    try {
      await axios.put(`/api/quotations/${quotationId}/accept`);
      // Update UI to reflect accepted status
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
    }
  };

  const handleRejectQuote = async (quotationId) => {
    try {
      await axios.put(`/api/quotations/${quotationId}/reject`);
      // Update UI to reflect rejected status
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
    }
  };

  return (
    <div>
      <h2>Event Details</h2>
      {/* ... other event details ... */}
      <h3>Quotations</h3>
      {quotations.length > 0 ? (
        <ul>
          {quotations.map((quotation) => (
            <li key={quotation._id}>
              <p>Service Provider: {quotation.serviceProviderDetails.name}</p>
              <p>Service: {quotation.serviceName}</p>
              <p>Amount: {quotation.amount}</p>
              <p>Submitted: {quotation.createdAt.toLocaleDateString()}</p>
              <button onClick={() => handleAcceptQuote(quotation._id)}>Accept</button>
              <button onClick={() => handleRejectQuote(quotation._id)}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quotations received yet.</p>
      )}
    </div>
  );
};

export default EventDetails;
