import { useEffect, useState } from "react";

import "./App.css";
import EventForm from "./Components/Event Creater/EventForm";
// import EventCard from "./Components/Event Creater/EventCard";
import { Routes, Route } from "react-router-dom";
import Eventslist from "./Components/Event Creater/Eventslist";
// import ServiceProviderRegistrationForm from "./Components/LoginLogout/SPForm";
import Footer from "./Components/Landing_Page/Footer/Footer";
import AboutUs from "./Components/Landing_Page/Pages/Aboutus";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/LoginLogout/Login";
import ForgotPassword from "./Components/LoginLogout/Forgotpassword";
import Registration from "./Components/LoginLogout/Registration";
import Card from "./Components/Event Creater/EventCard2";
import EventCarousal from "./Components/Landing_Page/Events List/EventCarousal";
import DashBoard from "./Components/DashBoard/Dashboard";
import ServiceProviderForm from "./Components/Service Provider/ServiceProviderInfo";
// import DetailEventCard from "./Components/Event Creater/DetailEventCard";
import MainEventForm from "./Components/Event Creater/Event Form/MainEventForm";
import Navbar from "./Components/Navbar/Navbar";
import DetailEventCard2 from "./Components/Event Creater/DetailEvent2";
import Cart from "./Components/Event Attendee/Cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./Components/Final Pages/Success";
import Failed from "./Components/Final Pages/Failed";
import ReviewEvent from "./Components/DashBoard/Review";
// import EventList from "./Components/Event Creater/AcceptReject/EventList";

// import { config } from "dotenv";
const stripePromise = loadStripe(
  "pk_test_51OyakHSE0pec6OUZ4SPFZmDvcA9KbhJTqU51aSC9tDFMFGRnCD6VesQBWOEaMAxueMhsbT4rnkufvRYLSOfNas7200jRP7SYOi"
);

function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear localStorage when tab is closed
      localStorage.clear();
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/form" element={<EventForm />} />
          <Route path="/events/*" element={<Eventslist />} />
          {/* <Route path="/spreg" element={<ServiceProviderRegistrationForm />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/foo" element={<Footer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fpwd" element={<ForgotPassword />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cardcar" element={<EventCarousal />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/spreg" element={<ServiceProviderForm />} />
          {/* <Route path="/devent" element={<DetailEventCard />} /> */}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/ev1" element={<MainEventForm />} />
          <Route path="/de2" element={<DetailEventCard2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/review" element={<ReviewEvent />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />

          {/* <Route path="/el" element={<EventList />} /> */}
        </Routes>
      </Elements>
    </>
  );
}

export default App;
