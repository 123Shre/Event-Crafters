import React, { useState } from "react";
import axios from "axios";
import { Stepper, Step, StepLabel, Button, Box, Alert } from "@mui/material";
import EventFormStep1 from "./EventFormStep1";
import EventFormStep2 from "./EventFormStep2";
import EventFormStep3 from "./EventFormStep3";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const steps = ["Basic Information", "Additional Details", "Contracts"];

const SuccessAlert = () => {
  return (
    <>
      <Alert variant="filled" severity="success">
        You Successfully created the event!
      </Alert>
      ;
    </>
  );
};

const MainEventForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventData, setEventData] = useState({
    images: [],
    name: "",
    description: "",
    organizerName: "",
    ageRestrictions: "",
    cityName: "",
    dateAndTime: "",
    priceType: "Free",
    price: "",
    contracts: [],
    address: "",
    // email: sessionStorage.getItem("email"),
  });
  const [openAlert, setOpenAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    // Check if any required fields are empty
    const requiredFields1 = [
      "name",
      "organizerName",
      "ageRestrictions",
      "cityName",
    ];
    const emptyFields1 = requiredFields1.filter((field) => !eventData[field]);
    const requiredFields2 = ["dateAndTime", "description", "address"];
    const emptyFields2 = requiredFields2.filter((field) => !eventData[field]);

    if (activeStep === 0 && emptyFields1.length > 0) {
      setOpenAlert(true); // Show alert if any required field is empty in step 1
    } else if (activeStep === 1 && emptyFields2.length > 0) {
      setOpenAlert(true); // Show alert if any required field is empty in step 2
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    // Perform form submission logic here, such as sending data to a server
    
    const request = await axios
      .post("http://localhost:3000/eventCreater/event_create", eventData, {
        headers: { Authorization: sessionStorage.getItem("accessToken") },
      })
      .then((res) => {
        console.log("Form submitted successfully: ", res.data);
        setSuccessAlert(true);
        setActiveStep(0);
        navigate("/ev1");
        setEventData({
          // Reset all input values to null after form submission
          images: [],
          name: "",
          description: "",
          organizerName: "",
          ageRestrictions: "",
          cityName: "",
          dateAndTime: "",
          priceType: "Free",
          price: "",
          contracts: [],
          address: "",
        });
      })
      .catch((err) => {
        console.error("Error while submitting form: ", err);
      });
  };
  // console.log(successAlert);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <EventFormStep1
            eventData={eventData}
            setEventData={setEventData}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <EventFormStep2
            eventData={eventData}
            setEventData={setEventData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <EventFormStep3
            eventData={eventData}
            setEventData={setEventData}
            handleBack={handleBack}
            handleSubmit={handleSubmit} // Pass the submit function to the third step
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <>
      {successAlert && <SuccessAlert />}

      <div className="event-form shadow-2xl rounded-2xl ml-6 mr-6 max-h-fit mt-1 pb-14">
        <h1 className="text-4xl font-bold text-center mt-2 ">
          Event Creation Form
        </h1>

        <div className="mb-2">
          {/* Add the back button here */}
          <Button
            variant="contained"
            onClick={() => navigate("/dash")}
            sx={{ mb: 2 }}
          >
            ⬅Back to Dashboard
          </Button>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            variant="contained"
          >
            ⬅Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit} // Trigger the submit function on the last step
              sx={{ ml: 1 }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ ml: 1 }}
              disabled={activeStep === steps.length - 1}
            >
              Next➡
            </Button>
          )}
        </Box>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <MuiAlert
            onClose={handleCloseAlert}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please fill in all required fields.
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default MainEventForm;
