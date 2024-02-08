import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";

const generateMapLink = (address) => {
  const query = queryString.stringify({ q: address });
  return `https://www.google.com/maps/search/?${query}`;
};

const EventForm = () => {
  const [eventData, setEventData] = useState({
    images: [],
    name: "",
    description: "",
    organizerName: "",
    ageRestrictions: "",
    dateAndTime: "",
    priceType: "Free",
    price: "",
    contracts: [],
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setEventData((prevData) => ({ ...prevData, images: files }));
  };
  const handleDeleteContract = (index) => {
    setEventData((prevData) => ({
      ...prevData,
      contracts: prevData.contracts.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit event data to backend API
      await axios.post("http://localhost:5000/api/events", eventData);

      // Clear form data after successful submission
      setEventData({
        images: [],
        name: "",
        description: "",
        organizerName: "",
        ageRestrictions: "",
        dateAndTime: "",
        priceType: "Free",
        price: "",
        contracts: [],
        address: "",
      });

      // Optionally, show success message or redirect to another page
    } catch (error) {
      console.error("Error submitting event:", error);
      // Handle error - show error message or perform other actions
    }
  };

  return (
    <div className="event-form">
      <h1 className="text-3xl font-bold mb-4">Event Creation Form</h1>
      <form className="bg-white p-4 rounded shadow-md">
        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div>
            {/* Event Name */}
            <label className="block mb-2">
              Event Name:
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              />
            </label>
            {/* Organizer's Name */}
            <label className="block mb-2">
              Organizer's Name:
              <input
                type="text"
                name="organizerName"
                value={eventData.organizerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              />
            </label>
            <label className="block mb-2">
              Upload Images:
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <div>
                {eventData.images.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            </label>

            {/* Age Restrictions */}
            <label className="block mb-2">
              Age Restrictions:
              <input
                type="text"
                name="ageRestrictions"
                value={eventData.ageRestrictions}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              />
            </label>
          </div>

          {/* Second Column */}
          <div>
            {/* Date and Time */}
            <label className="block mb-2">
              Date and Time:
              <input
                type="text"
                name="dateAndTime"
                value={eventData.dateAndTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              />
            </label>
            {/* Description */}
            <label className="block mb-2">
              Description:
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                rows="1"
              />
            </label>

            {/* Price Type */}
            <label className="block mb-2">
              Price Type:
              <select
                name="priceType"
                value={eventData.priceType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </label>

            {/* Address */}
            <label className="block mb-2">
              Address:
              <input
                type="text"
                name="address"
                value={eventData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                required
              />
            </label>
          </div>
        </div>

        {/* Contracts Section */}
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Contracts:</h2>
          {eventData.contracts.map((contract, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">Service Name: {contract.serviceName}</p>
              <p>Quotation: {contract.quotation}</p>
              <button
                type="button"
                onClick={() => handleDeleteContract(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
          {/* Add Contract Fields */}
          <label className="block mb-2">
            Service Name:
            <input
              type="text"
              name="serviceName"
              value={eventData.serviceName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-2">
            Quotation:
            <input
              type="number"
              name="quotation"
              value={eventData.quotation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <button
            type="button"
            onClick={() =>
              setEventData((prevData) => ({
                ...prevData,
                contracts: [
                  ...prevData.contracts,
                  {
                    serviceName: eventData.serviceName,
                    quotation: eventData.quotation,
                  },
                ],
                serviceName: "",
                quotation: "",
              }))
            }
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Add Contract
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
