import { useState } from "react";

import { AtSelect } from "components/atoms";
import {
  MlCounter,
  MlSearchForm,
  MlGenreSelect,
  MlMovieDetails,
} from "components/molecules";
import { OrMovieTile } from "components/organisms";

const GENRES = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];
const SORT_BY_OPTIONS = [
  { label: "Release Date", value: "release" },
  { label: "Title", value: "title" },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0]);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);

  function handleSearch(query) {
    console.log(query);
  }

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="flex flex-col space-y-8 mx-auto max-w-2xl py-14" id="root">
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

      <section>
        <h3 className="font-semibold uppercase">Movie Details component</h3>
        <div className="bg-gray-600 p-10">
          <MlMovieDetails
            imageUrl="https://static.posters.cz/image/750/plakaty/attack-on-titan-shingeki-no-kyojin-attack-i22797.jpg"
            title="Shingeki No Kyojin"
            rating={8.7}
            genres={["Accion"]}
            releaseYear={2013}
            duration="2h 34min"
            description="La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al «Ejército de las murallas» junto a su hermana adoptiva y su mejor amigo con el objetivo de vengar la muerte de su madre y destruir a los titanes."
          />
        </div>
      </section>

      <section>
        <h3 className="font-semibold uppercase">Sort control component</h3>
        <div className="bg-gray-600 p-10">
          <AtSelect
            label="Sort by"
            id="sort-by"
            currentValue={sortBy}
            options={SORT_BY_OPTIONS}
            handleChange={setSortBy}
            styles={{
              label: "uppercase font-light opacity-50 text-white",
              options: "bg-gray-600 text-white uppercase focus:outline-none",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
