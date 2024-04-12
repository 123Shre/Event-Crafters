import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import moment from "moment";
import CloseIcon from '@mui/icons-material/Close';
const Contracts = () => {
  const [events, setEvents] = useState([]);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [quotationAmount, setQuotationAmount] = useState("");
  const [spnfound, setSpnfound] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = sessionStorage.getItem("accessToken");
      try {
        const response = await axios.post(
          "http://localhost:3000/eventCreater/allcontracts"
        
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  const isEventCompleted = (dateAndTime) => {
    return moment(dateAndTime).isBefore(moment());
  };
  const Alertk = () => {
    return (
      <>
        <Alert variant="filled" severity="error">
          You are not Service Provider!
        </Alert>
        ;
      </>
    );
  };
  const handleEventClick = (eventId, serviceName) => {
    const clickedEvent = events.find((event) => event._id === eventId);
    setClickedEvent({ ...clickedEvent, serviceName });
    setIsDetailsOpen(true); // Open details on click
  };

  const handleCloseDetails = () => {
    setClickedEvent(null);
    setIsDetailsOpen(false);
    setQuotationAmount(""); // Clear quotation amount on close
  };

  const handleChangeQuotationAmount = (event) => {
    setQuotationAmount(event.target.value);
  };

  const handleSubmitQuotation = async () => {
    const { _id, serviceName } = clickedEvent; // Get event details
    const contract = clickedEvent.contracts.find(
      (contract) => contract.serviceName === serviceName
    );

    const quotationData = {
      eventId: _id,
      ServiceName: serviceName,
      budget: contract.quotation,
      amount: quotationAmount,
      email: sessionStorage.getItem("email"),
    };
    // console.log(localStorage.getItem("token"));

    try {
      const response = await axios.post(
        "http://localhost:3000/sp/submitquotation", // Replace with your submit quotation endpoint
        quotationData
      );
      console.log("Quotation Data:", quotationData);
      console.log("Quotation submitted:", response.data);
      // Handle successful submission (e.g., show a success message)
      if (response.data.message === "Quotation submitted") {
        alert("Quotation submitted successfully");
      }
    } catch (error) {
      // console.log(error.response.data.message);
      if (error.response.data.message === "Service Provider not found") {
        setSpnfound(true);
      } else {
        console.error("Error submitting quotation:", error);
      }
    } finally {
      // Optionally clear quotation amount after submission
      setQuotationAmount("");
    }
  };

  return (
    <>
      {spnfound && <Alertk />}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Event Quotations</h1>
        {events.map(
          (event) =>
          !isEventCompleted(event.dateAndTime) &&
            event.contracts.length > 0 && (
              <div key={event._id} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{event.name}</h2>
                <ul className="list-disc pl-6">
                  {event.contracts.map((contract) => (
                    <li
                      key={contract._id}
                      className="mb-2 flex justify-between items-center border-neutral-500 border-2 p-3 rounded-lg shadow-md"
                    >
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-xl">
                            {contract.serviceName}
                          </span>
                        </div>
                      </div>
                      <span className="ml-28 flex items-center">
                        <span className="mr-4 text-xl">Budget:</span>
                        <span className="text-gray-600 font-semibold text-xl">
                          &#8377; {contract.quotation}
                        </span>
                      </span>
                      <div>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mr-2 rounded"
                          onClick={() =>
                            handleEventClick(event._id, contract.serviceName)
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Render EventDetails component if clicked */}
                {clickedEvent && clickedEvent._id === event._id && (
                  <EventDetails
                    event={clickedEvent}
                    isDetailsOpen={isDetailsOpen}
                    onClose={handleCloseDetails}
                    onSubmitQuotation={handleSubmitQuotation}
                    quotationAmount={quotationAmount}
                    onChangeQuotationAmount={handleChangeQuotationAmount}
                  />
                )}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Contracts;

const EventDetails = ({
  event,
  isDetailsOpen,
  onClose,
  onSubmitQuotation,
  quotationAmount,
  onChangeQuotationAmount,
}) => {
  const [quotationStatus, setQuotationStatus] = useState(null);

  useEffect(() => {
    const fetchQuotationStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/sp/quotationstatus?eventId=${event._id}&serviceName=${event.serviceName}&email=${sessionStorage.getItem("email")}`
        );
        setQuotationStatus(response.data.status);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching quotation status:", error);
      }
    };

    fetchQuotationStatus();
  }, [event._id, event.serviceName]);
  const formattedDate = new Date(event.dateAndTime).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formattedTime = new Date(event.dateAndTime).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-2">Event Details</h3>
      <ul className="list-disc pl-4">
        <li>Name: {event.name}</li>
        <li>Location: {event.address}</li>
        <li>Date: {formattedDate}</li>
        <li>Time: {formattedTime}</li>
        {/* {console.log(quotationStatus)} */}
        {quotationStatus && (
        <li>
          Quotation Status: <strong>{quotationStatus}</strong>
        </li>
      )}
      </ul>
      {/* Render quotation input and submit button if details are open */}
      {isDetailsOpen && (
        <div className="mt-4">
          <label
            htmlFor="quotationAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Your Quotation Amount:
          </label>
          <input
            type="number"
            min="0"
            id="quotationAmount"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
            placeholder="Enter amount"
            value={quotationAmount}
            onChange={onChangeQuotationAmount}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4"
            disabled={!quotationAmount}
            onClick={onSubmitQuotation}
          >
            Submit Quotation
          </button>
        </div>
      )}
      {/* Close button */}
      <button
        className="mix-blend-multiply top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
        style={{marginLeft:"68rem"}}
        onClick={onClose}
      >
        <CloseIcon/> 
      </button>
    </div>
  );
};
