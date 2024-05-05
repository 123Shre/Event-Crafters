import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Create Unforgettable Events
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Elevate your events with our expert event crafting services.{" "}
              <br />
              From concept to execution, we make every occasion extraordinary.
            </p>
            <Link to="/login">
              {" "}
              <a className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                Get Started
              </a>
            </Link>
          </div>
          <div className="md:max-w-lg">
            <img
              src="https://source.unsplash.com/random/500x500/?event"
              alt="Event Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-lg">
            <img
              src="https://source.unsplash.com/random/500x500/?event,celebration"
              alt="Event Celebration"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8 md:mb-0 text-center md:text-left md:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Attends Unforgettable Events
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
            Crave an event beyond ordinary? We sculpt unforgettable experiences. Expertly crafted, every detail ensures yours is a memory forever etched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
