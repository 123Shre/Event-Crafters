import { useState } from "react";

import "./App.css";
import Chakra from "./assets/Chakra";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chakra />
    </>
  );
}

export default App;
