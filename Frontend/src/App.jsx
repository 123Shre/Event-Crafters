import { useState } from "react";

import "./App.css";
import EventForm from "./Components/Event Creater/EventForm";
// import EventCard from "./Components/Event Creater/EventCard";
import { Routes, Route } from "react-router-dom";
import Eventslist from "./Components/Event Creater/Eventslist";
// import Slider from "./Components/Landing_Page/Carousal/Slider";
// import ServiceProviderRegistrationForm from "./Components/LoginLogout/SPForm";
import Footer from "./Components/Landing_Page/Footer/Footer";
import AboutUs from "./Components/Landing_Page/Pages/Aboutus";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/LoginLogout/Login";
import ForgotPassword from "./Components/LoginLogout/Forgotpassword";
import Registration from "./Components/LoginLogout/Registration";
import Card from "./Components/Event Creater/EventCard2";
import EventCarousal from "./Components/Landing_Page/Events List/EventCarousal";
import AutoPlay from "./Components/Landing_Page/Events List/EventCarousal";
import DashBoard from "./Components/DashBoard/Dashboard";
import ServiceProviderRegistrationForm from "./Components/LoginLogout/SPForm";
import ServiceProviderForm from "./Components/Service Provider/ServiceProviderInfo";
import DetailEventCard from "./Components/Event Creater/DetailEventCard";
import EventFormStep1 from "./Components/Event Creater/Event Form/EventFormStep1";
import EventFormStep2 from "./Components/Event Creater/Event Form/EventFormStep2";
import EventFormStep3 from "./Components/Event Creater/Event Form/EventFormStep3";
import MainEventForm from "./Components/Event Creater/Event Form/MainEventForm";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <Route path="/devent" element={<DetailEventCard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/ev1" element={<MainEventForm />} />
      </Routes>
    </>
  );
}

export default App;
