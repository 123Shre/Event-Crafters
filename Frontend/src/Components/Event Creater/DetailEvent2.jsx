import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const DetailEventCard2 = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const location = useLocation();
  const event = location.state?.event;
  console.log(event);

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

  const onSubmit = () => {
    addToCart({ ...event, quantity: 1 });
    console.log("Added to Cart");
    navigate("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
          <Link to="/dash">
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Link>
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="text-sm">{event.cityName}</p>
        </div>
        <div className="px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="bg1.jpg"
                alt="Event Image"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Organizer
                </h3>
                <p className="text-gray-600">{event.organizerName}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Age Restriction
                </h3>
                <p className="text-gray-600">{event.ageRestrictions}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Date
                </h3>
                <p className="text-gray-600">{formattedDate}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Time
                </h3>
                <p className="text-gray-600">{formattedTime}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Price
                </h3>
                <p className="text-gray-600">
                  {event.priceType === "Free" ? "Free" : `$${event.price}`}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">{event.address}</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                  onClick={onSubmit}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEventCard2;