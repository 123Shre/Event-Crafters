import { useState } from "react";

import "./App.css";
import EventForm from "./Components/Event Creater/EventForm";
import EventCard from "./Components/Event Creater/EventCard";
import { Routes, Route } from "react-router-dom";
import Eventslist from "./Components/Event Creater/Eventslist";

import Slider from "./Components/Landing_Page/Carousal/Slider";
import ServiceProviderRegistrationForm from "./Components/LoginLogout/SPForm";
import Footer from "./Components/Landing_Page/Footer/Footer";
import AboutUs from "./Components/Landing_Page/Pages/Aboutus";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Component from "./Components/LoginLogout/Registration";
import Login from "./Components/LoginLogout/Login";
import ForgotPassword from "./Components/LoginLogout/Forgotpassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/form" element={<EventForm />} />
        <Route path="/events/*" element={<Eventslist />} />
        <Route path="/spreg" element={<ServiceProviderRegistrationForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/foo" element={<Footer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reg" element={<Component />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fpwd" element={<ForgotPassword />} />
        

      </Routes>
    </>
  );
}

export default App;
