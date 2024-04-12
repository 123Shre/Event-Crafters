import React from "react";
import Navbar from "../../Navbar/Navbar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-200 pb-16">
        <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-center items-center min-h-screen">
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Event Crafters
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Event Crafters is a platform that empowers individuals and
              organizations to create, discover, and manage unforgettable
              events. We bridge the gap between creators, attendees, and service
              providers, fostering a vibrant community for event experiences.
            </p>

            <div className="flex items-center mb-8">
             <CheckCircleOutlineIcon/>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplify event creation and management.
              </p>
            </div>

            <div className="flex items-center mb-8">
             <PersonIcon/>
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with a diverse range of service providers.
              </p>
            </div>

            <div className="flex items-center mb-8">
              <CalendarMonthIcon/>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover unique and exciting events.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Learn More
            </a>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src="/aboutus.jpg"
              alt="Event Crafters Illustration"
              className="object-cover rounded-lg h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
