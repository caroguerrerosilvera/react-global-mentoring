import React, { useState } from "react";

import { MlCounter, MlSearchForm, MlGenreSelect } from "components/molecules";
import { OrMovieTile } from "components/organisms";

const GENRES = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

function App() {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0]);

  function handleSearch(query) {
    console.log(query);
  }

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="flex flex-col space-y-8 mx-auto max-w-xl py-14" id="root">
      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold uppercase">Counter component</h3>
        <MlCounter initialValue={2} />
      </section>

      <section className="flex flex-col space-y-2 justify-center w-full">
        <h3 className="font-semibold uppercase">Search form component</h3>
        <MlSearchForm
          placeholder="What do you want to watch?"
          onSearch={handleSearch}
        />
      </section>

      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold uppercase ">Genre select component</h3>
        <div className="bg-gray-600">
          <MlGenreSelect
            genres={GENRES}
            selectedGenre={selectedGenre}
            onSelect={handleSelectedGenre}
          />
        </div>
      </section>

      <section className="flex flex-col space-y-2 justify-center">
        <h3 className="font-semibold uppercase">Movie Tile component</h3>
        <div className="bg-gray-600 p-4 flex justify-center">
          <OrMovieTile
            title="Shingeki No Kyojin"
            releaseYear={2013}
            genres={["Accion"]}
            imageUrl="https://static.posters.cz/image/750/plakaty/attack-on-titan-shingeki-no-kyojin-attack-i22797.jpg"
            onEdit={() => console.log("On edit")}
            onClick={() => console.log("On click")}
            onDelete={() => console.log("On delete")}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
