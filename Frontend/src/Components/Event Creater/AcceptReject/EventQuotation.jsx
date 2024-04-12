import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment"; // Import moment.js for date comparison

const QuotationList = ({ eventId }) => {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/eventCreater/quotations/${eventId}`
        );
        setQuotations(response.data);
      } catch (err) {
        console.error("Error fetching quotations:", err);
      }
    };
    fetchQuotations();
  }, [eventId]);

  const refetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/eventCreater/quotations/${eventId}`
      );
      setQuotations(response.data);
    } catch (err) {
      console.error("Error fetching quotations:", err);
    }
  };

  const handleAcceptReject = async (quotationId, status) => {
    try {
      await axios.patch(
        `http://localhost:3000/eventCreater/quotations/${quotationId}`,
        { status }
      );
      await refetchQuotations();
    } catch (err) {
      console.error("Error updating quotation:", err);
    }
  };

  // Fetch event details to get the dateAndTime
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/eventCreater/event/${eventId}`
        );
        setEventDetails(response.data);
      } catch (err) {
        console.error("Error fetching event details:", err);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  // Check if the event date is after the current date
  const isEventUpcoming = () => {
    if (eventDetails && eventDetails.dateAndTime) {
      const eventDate = moment(eventDetails.dateAndTime);
      const today = moment().startOf("day");
      return eventDate.isAfter(today);
    }
    return false;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold">Quotations</h1>
      {isEventUpcoming() ? (
        quotations.length === 0 ? (
          <h3 className="text-red-600">No Quotation has been submitted yet</h3>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {quotations.map((quotation) => (
              <div
                key={quotation._id}
                className="bg-white shadow-md rounded-md p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">
                    Service Name: {quotation.serviceName}
                  </p>
                  <p className="text-gray-600">
                    Amount: &#8377; {quotation.amount}
                  </p>
                  <p className="text-gray-600">
                    Service Provider: {quotation.email}
                  </p>
                  <p className="text-gray-600">
                    Status: {quotation.status || "Pending"}
                  </p>
                </div>
                {/* {console.log(quotation.status)} */}
                {quotation.status === "pending" ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAcceptReject(quotation._id, "accepted")}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAcceptReject(quotation._id, "rejected")}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <button
                    className={`bg-${
                      quotation.status === "accepted" ? "green" : "red"
                    }-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50`}
                    disabled
                  >
                    {quotation.status === "accepted" ? "Accepted" : "Rejected"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )
      ) : (
        <h3 className="text-red-600 text-2xl font-bold">This Event is over</h3>
      )}
    </div>
  );
};

export default QuotationList;