import { useState } from "react";

import "./App.css";
import EventForm from "./Components/Event Creater/EventForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EventForm />
    </>
  );
}

export default App;
