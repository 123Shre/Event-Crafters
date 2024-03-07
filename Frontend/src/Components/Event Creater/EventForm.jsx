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
      await axios.post(
        "http://localhost:3000/eventcreater/event_create",
        eventData
      );

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
    <div className="event-form border-2 border-yellow-900 ml-6 mr-6 mt-1">
      <h1 className="text-4xl font-bold text-center mt-2 mb-4">Event Creation Form</h1>
      <form className="bg-white p-4 rounded shadow-md">
        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div>
            {/* Event Name */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                value={eventData.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Event Name
              </label>
            </div>

            {/* Organizer's Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="organizerName"
                value={eventData.organizerName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Organizer's Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleImageChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Upload Image
              </label>
              <div>
                {eventData.images.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            </div>

            {/* Age Restrictions */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="ageRestrictions"
                value={eventData.ageRestrictions}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Age Restrictions
              </label>
            </div>

            {/* Date and Time */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dateAndTime"
                value={eventData.dateAndTime}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none = dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Date and Time
              </label>
            </div>
          </div>

          {/* Second Column */}
          <div>
            {/* Description */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                rows="2"
                type="text"
                name="description"
                value={eventData.description}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Description
              </label>
            </div>

            {/* Price Type */}

            <div className="relative z-0 w-full mb-5 group">
              <select
                name="priceType"
                value={eventData.priceType}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price Type
              </label>
            </div>
            {eventData.priceType === "Paid" && (
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="price"
                  value={eventData.price}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Price
                </label>
              </div>
            )}

            {/* Address */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                value={eventData.address}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dateAndTime"
                value={eventData.dateAndTime}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Date and Time
              </label>
            </div>

            {eventData.address && (
              <p>
                <a
                  href={generateMapLink(eventData.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            )}
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
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
            </div>
          ))}
          {/* Add Contract Fields */}
        
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="serviceName"
              value={eventData.serviceName}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Service Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="quotation"
              value={eventData.quotation}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Quotation
            </label>
          </div>

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
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Contract
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>

         
        </div>
      </form>
    </div>
  );
};

export default EventForm;
