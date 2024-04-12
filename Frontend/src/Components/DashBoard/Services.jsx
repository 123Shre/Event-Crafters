import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contracts from "../Service Provider/Contracts";

const Services = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className="bg-green-200 rounded-lg pl-6">
        <h1 className="text-center text-3xl font-semibold pt-4">Services</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link to="/spreg">Create Service</Link>
        </button>
        <Contracts />
      </div>
    </>
  );
};

export default Services;
