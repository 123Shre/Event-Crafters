import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const EventFormStep1 = ({ eventData, setEventData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    // Check if the number of selected files exceeds 5
    if (files.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      // Clear the input field to remove excess files
      e.target.value = null;
      return;
    }
    // Update the images state with the selected files
    setEventData((prevData) => ({
      ...prevData,
      images: Array.from(files),
    }));
  };
  const isDataValid = () => {
    // Check if any required fields are empty
    const requiredFields = ["name", "organizerName", "ageRestrictions","citystate"];
    return requiredFields.every((field) => eventData[field]);
  };

  const handleSubmit = () => {
    if (isDataValid()) {
      handleNext();
    } else {
      setOpenAlert(true);
    }
  };

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  return (
    <form className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
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
            Upload Image(5 images required)
          </label>
          {/* <div>
            {eventData.images.map((file, index) => (
              <div key={index}>{file.name}</div>
            ))}
          </div> */}
        </div>

        {/* Age Restrictions */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="ageRestrictions"
            value={eventData.ageRestrictions}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder="e.g. 18+"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Age Restrictions
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="cityName"
            value={eventData.cityName}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder="e.g. Mumbai,Maharastra"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            City Name
          </label>
        </div>
      </div>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} severity="error" sx={{ width: "100%" }}>
          Please fill in all required fields.
        </MuiAlert>
      </Snackbar>
    </form>
  );
};

export default EventFormStep1;
