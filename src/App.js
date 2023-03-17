import React from "react";

import { Counter } from "./components/molecules/MlCounter/MlCounter";

function App() {
  return (
    <div className="flex justify-center" id="root">
      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold">Counter component</h3>
        <Counter initialValue={2} />
      </section>
    </div>
  );
}

export default App;
