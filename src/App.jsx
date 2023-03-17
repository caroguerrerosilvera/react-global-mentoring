import React from "react";

import { MlCounter, MlSearchForm } from "components/molecules";

function App() {
  function handleSearch(query) {
    console.log(query);
  }

  return (
    <div className="flex flex-col space-y-8 mx-auto max-w-xl py-14" id="root">
      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold uppercase">Counter component</h3>
        <MlCounter initialValue={2} />
      </section>

      <section className="flex flex-col space-y-2 justify-center w-full">
        <h3 className="font-semibold uppercase">Search form component</h3>
        <MlSearchForm placeholder="What do you want to watch?" onSearch={handleSearch} />
      </section>

      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold uppercase ">Genre select component</h3>
      </section>
    </div>
  );
}

export default App;
