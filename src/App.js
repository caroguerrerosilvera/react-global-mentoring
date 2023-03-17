import React from "react";

import { Counter } from "./components/molecules/MlCounter/MlCounter";
import "./App.css";

function App() {
  return (
    <div className="App" id="root">
      <Counter initialValue={2} />
    </div>
  );
}

export default App;
