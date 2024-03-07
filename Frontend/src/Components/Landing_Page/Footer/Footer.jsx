import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between">
        {/* About Us section */}
       
        {/* Links section (adapt based on your needs) */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h5 className="text-xl font-bold mb-2">Links</h5>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:underline">
                Explore Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:underline">
                Create Event
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Contact Us section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h5 className="text-xl font-bold mb-2">Contact Us</h5>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="mailto:support@eventcrafters.com" className="text-white hover:underline">
                support@eventcrafters.com
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:underline">
                (+1) 555-555-5555
              </a>
            </li>
          </ul>
        </div>

        {/* Social media section (optional) */}
        <div className="w-full md:w-1/4 mb-2">
        <div className="w-full mb-2">
          <h5 className="text-xl font-bold mb-2">About Us</h5>
          <p className="text-sm">
            Event Crafters is a platform that connects event creators, attendees, and service providers, making it easier to find, create, and manage amazing events.
          </p>
        </div>

          <h5 className="text-xl font-bold mb-2">Follow Us</h5>
          <ul className="list-none flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                <SocialIcon network="facebook" url="https://www.facebook.com/" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400">
              <SocialIcon network="twitter" url="https://www.twitter.com/" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500">
              <SocialIcon network="instagram" url="https://www.instagram.com/" />
              </a>
            </li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
      </div>

      <div className="text-center py-2 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Event Crafters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
