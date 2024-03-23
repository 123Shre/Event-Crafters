import axios from "axios";
import React, { useState } from "react";

const ServiceProviderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ServiceAgencyName: "",
    servicesOffered: "",
    mobileNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your backend
    const request = axios
      .post("http://localhost:3000/sp/spform", formData)
      .then((response) => {
        console.log("Form submitted successfully: ", response.data);
      })
      .catch((err) => {
        console.log("Form is not submitted",err);
      });
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
      <h1 className="text-2xl font-bold mb-4">Service Provider Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="serviceAgencyName" className="block font-medium mb-1">
            Service Agency Name
          </label>
          <input
            type="text"
            id="serviceAgencyName"
            name="serviceAgencyName"
            value={formData.ServiceAgencyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="servicesOffered" className="block font-medium mb-1">
            Services Offered
          </label>
          <textarea
            id="servicesOffered"
            name="servicesOffered"
            value={formData.servicesOffered}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            maxLength={10} // Ensure maximum length is 10
            onInput={(e) => {
              if (e.target.value.length > 10) {
                e.target.value = e.target.value.slice(0, 10); // Limit input to 10 characters
              }
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default ServiceProviderForm;
