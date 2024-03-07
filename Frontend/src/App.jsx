import { useState } from "react";

import "./App.css";
import EventForm from "./Components/Event Creater/EventForm";
import EventCard from "./Components/Event Creater/EventCard";
import {
  Router as BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Eventslist from "./Components/Event Creater/Eventslist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/form" element={<EventForm />} />
        <Route path="/events/*" element={<Eventslist />} />
      </Routes>
    </>
  );
}

export default App;
