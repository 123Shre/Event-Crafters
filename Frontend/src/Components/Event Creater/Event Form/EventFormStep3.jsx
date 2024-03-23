import React, { useState } from "react";

const EventFormStep3 = ({ eventData, setEventData, handleBack }) => {
  const [newContract, setNewContract] = useState({
    serviceName: "",
    quotation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContract((prevContract) => ({ ...prevContract, [name]: value }));
  };
  const handleDeleteContract = (index) => {
    setEventData((prevData) => ({
      ...prevData,
      contracts: prevData.contracts.filter((_, i) => i !== index),
    }));
  };
  const handleAddContract = () => {
    setEventData((prevData) => ({
      ...prevData,
      contracts: [...prevData.contracts, newContract],
    }));
    // Clear the form fields after adding the contract
    setNewContract({
      serviceName: "",
      quotation: "",
    });
  };

  return (
    <form className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Contracts:</h2>
        <div className="grid  gap-4">
          {eventData.contracts.map((contract, index) => (
            <div key={index} className="border rounded-lg border-gray-300 p-4">
              <p className="font-bold">Service Name: {contract.serviceName}</p>
              <p>Quotation: {contract.quotation}</p>
              <button
                type="button"
                onClick={() => handleDeleteContract(index)} // Call handleDeleteContract function on button click
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        {/* Add Contract Fields */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="serviceName"
            value={newContract.serviceName}
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
            value={newContract.quotation}
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
          onClick={handleAddContract}
          className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Contract
        </button>
      </div>
    </form>
  );
};

export default EventFormStep3;
