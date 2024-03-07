import React, { useState } from 'react';

const ServiceProviderRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    serviceType: '',
    serviceDescription: '',
    pricing: '',
    businessName: '',
    businessAddress: '',
    businessPhone: '',
    businessWebsite: '',
    portfolioImages: [],
    availability: '',
    experienceYears: '',
    certifications: '',
    references: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform validation
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Service Provider Registration</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Basic Information */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        {/* Service Details */}
        <div className="mb-4">
          <label htmlFor="serviceType" className="block mb-1">Service Type</label>
          <input type="text" id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="serviceDescription" className="block mb-1">Service Description</label>
          <textarea id="serviceDescription" name="serviceDescription" value={formData.serviceDescription} onChange={handleChange} className="w-full border rounded-md p-2"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="pricing" className="block mb-1">Pricing</label>
          <input type="text" id="pricing" name="pricing" value={formData.pricing} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>

        {/* Business Information */}
        <div className="mb-4">
          {/* Add fields for business name, address, phone, website */}
        </div>

        {/* Portfolio */}
        <div className="mb-4">
          {/* Add file input for portfolio images */}
        </div>

        {/* Availability */}
        <div className="mb-4">
          {/* Add fields for availability */}
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          {/* Add fields for experience, certifications, references */}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default ServiceProviderRegistrationForm;
