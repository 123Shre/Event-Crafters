import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
const Card = (props) => {
  return (
    <>
      <div className="mx-auto min-w-72 max-w-xs space-y-6 shadow-lg bg-orange-50 rounded-3xl relative top-8 ml-3">
        <div className="mt-0 text-center p-4 pb-0 ">
          <img src="bg2.jpg" className="rounded-3xl " />
        </div>
        <div className="p-8 pt-0">
          <div className="space-y-2 text-2xl font-extrabold">
            {/* Arjit Singh Concert */}
            {props.eventname}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="text-sm mr-2"> 
            {/* 12th October 2021 */}
            {props.date}
            </span>
            <FontAwesomeIcon icon={faClock} />
            <span className="text-sm">{props.time}</span>
          </div>
          <div className="space-y-2 mt-2 mb-2">
            <FontAwesomeIcon icon={faMapMarker} />
            {props.location}
          </div>
          <div className="space-y-2">
            <button 
              className="w-full mt-2 px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Book Now
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
