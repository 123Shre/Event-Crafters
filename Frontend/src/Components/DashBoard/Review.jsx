import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "../Event Attendee/ReviewForm";
import moment from "moment";
const ReviewEvent = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookedEvents = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/attendee/bookedevents",
        { email: sessionStorage.getItem("email") },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookedEvents();
  }, []);

  return (
    <>
      <div className="container bg-green-200 p-6 rounded-lg  mx-auto ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Booked Events</h2>
        </div>
        {isLoading ? (
          <p>Loading booked events...</p>
        ) : error ? (
          <p>No event Found </p>
        ) : events.length === 0 ? (
          <p>You don't have any booked events yet.</p>
        ) : (
          events.map((event) => (
            <div
              key={event._id}
              className="border bg-slate-400 p-4 rounded-md mb-4"
            >
              <div className="mt-2">
                <h4 className="text-lg font-semibold mb-2">Cart Items:</h4>
                <ul className="list-disc pl-4">
                  {event.cart.map((cartItem) => (
                    <li key={cartItem._id} className="mb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{cartItem.name}</p>
                          {cartItem.priceType === "Paid" && (
                            <p className="text-sm">Price: {cartItem.price}</p>
                          )}
                          <p className="text-sm">
                            Quantity: {cartItem.quantity}
                          </p>
                          <p className="text-sm">
                            Total Amount Paid:{" "}
                            {cartItem.quantity * cartItem.price}
                          </p>
                          {cartItem.dateAndTime && (
                            <>
                              <p className="text-sm">
                                Event Date:
                                {new Date(
                                  cartItem.dateAndTime
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}{" "}
                                at{" "}
                                {new Date(
                                  cartItem.dateAndTime
                                ).toLocaleTimeString("en-US", {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </p>
                            </>
                          )}
                        </div>
                        <div>
                          {moment(cartItem.dateAndTime).isBefore(moment()) && (
                            <>
                              <ReviewForm
                                eventId={cartItem._id}
                                email={sessionStorage.getItem("email")}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {event.createdAt && (
                <p className="text-sm text-white">
                  Booked on: {new Date(event.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ReviewEvent;
