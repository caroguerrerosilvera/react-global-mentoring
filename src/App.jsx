import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { AtSortBy, AtButton, AtLogo } from "components/atoms";
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
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0]);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);

  function handleSearch(query) {
    setSearchText(query);
  }

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="flex flex-col space-y-8 mx-auto max-w-4xl" id="root">
      <section className="relative overflow-hidden w-full py-10 px-16">
        <div
          id="hero"
          className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0"
        ></div>
        <div className="relative flex flex-col">
          <div className="flex items-center justify-between">
            <AtLogo />
            <AtButton className="flex space-x-1 items-center justify-center bg-white opacity-[0.6] uppercase text-red-500 self-end px-4">
              <IoMdAdd />
              Add movie
            </AtButton>
          </div>

          <div className="space-y-8 mt-8">
            <h1 className="uppercase text-white text-[40px] font-light">
              FIND YOUR MOViE
            </h1>
            <MlSearchForm
              placeholder="What do you want to watch?"
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <MlGenreSelect
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={handleSelectedGenre}
        />

        <AtSortBy
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
      </section>

      <section>Movies</section>

      <footer className="w-full text-center bg-[#424242] py-4">
        <AtLogo />
      </footer>
    </div>
  );
}

export default App;
