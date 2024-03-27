import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
const Card = ({event}) => {
  //  const { eventname, location,_id, } = event;
  const navigate = useNavigate();
   const dateTime = new Date(event.dateAndTime);
   const formattedDate = dateTime.toLocaleDateString("en-US", {
     year: "numeric",
     month: "long",
     day: "numeric",
   });
   const formattedTime = dateTime.toLocaleTimeString("en-US", {
     hour: "numeric",
     minute: "2-digit",
     hour12: true,
   });

   const handleonclick = () => {
     if(event){
      navigate(`/de2`, {state: {event}})
     }
     else{
       console.log("no event")
     }
   }
  // console.log(event)
  return (
    <>
      <div className="mx-auto min-w-72 max-w-xs space-y-6 shadow-lg bg-orange-50 rounded-3xl relative top-8 ml-3">
        <div className="mt-0 text-center p-4 pb-0 ">
          <img src="bg2.jpg" className="rounded-3xl " />
        </div>
        <div className="p-8 pt-0">
          <div className="space-y-2 text-2xl font-extrabold">
            {/* Arjit Singh Concert */}
            {event.name}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="text-sm mr-2">
              {/* 12th October 2021 */}
              {/* {props.date} */}
              {formattedDate}
            </span>
            <FontAwesomeIcon icon={faClock} />
            <span className="text-sm">{formattedTime}</span>
          </div>
          <div className="space-y-2 mt-2 mb-2">
            <FontAwesomeIcon icon={faMapMarker} />
            {event.cityName}
          </div>
          <div className="space-y-2">
         {   console.log(event)}
            {/* <Link
              to={{
                pathname: "/de2",
                state: { event },
              }}
            > */}
            
              <button
                className="w-full mt-2 px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
             onClick={handleonclick} >
                Book Now
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
