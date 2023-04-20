import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { AtSortBy, AtButton, AtLogo } from "components/atoms";
import { MlSearchForm, MlGenreSelect } from "components/molecules";
import { OrMovieTile, OrDialog } from "components/organisms";

const MOVIES = [
  {
    imageUrl: "https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    title: "La Batalla de los Sexos",
    releaseYear: 2017,
    genres: ["Comedia", "Drama", "Deportes"],
  },
  {
    imageUrl: "https://image.tmdb.org/t/p/w500/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
    title: "Tenet",
    releaseYear: 2020,
    genres: ["Acción", "Ciencia ficción", "Suspenso"],
  },
  {
    imageUrl: "https://image.tmdb.org/t/p/w500/lIE7kfdLBRd0KENNtOaIqPPWNqh.jpg",
    title: "Soul",
    releaseYear: 2020,
    genres: ["Animación", "Aventura", "Comedia"],
  },
  {
    title: "El Club de la Pelea",
    releaseYear: 1999,
    genres: ["Drama", "Suspenso"],
    imageUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    title: "Matrix",
    releaseYear: 1999,
    genres: ["Ciencia ficción", "Acción"],
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "Parásitos",
    releaseYear: 2019,
    genres: ["Drama", "Comedia", "Suspenso"],
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    title: "El Club de los Poetas Muertos",
    releaseYear: 1989,
    genres: ["Drama"],
    imageUrl: "https://image.tmdb.org/t/p/w500/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg",
  },
  {
    title: "Interestelar",
    releaseYear: 2014,
    genres: ["Ciencia ficción", "Drama"],
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "La La Land",
    releaseYear: 2016,
    genres: ["Comedia", "Drama", "Musical"],
    imageUrl: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    title: "Blade Runner 2049",
    releaseYear: 2017,
    genres: ["Ciencia ficción", "Suspenso"],
    imageUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    title: "El Laberinto del Fauno",
    releaseYear: 2006,
    genres: ["Fantasía", "Drama", "Guerra"],
    imageUrl: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
  },
  {
    title: "Interestelar",
    releaseYear: 2014,
    genres: ["Ciencia ficción", "Drama"],
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Jurassic Park",
    releaseYear: 1993,
    genres: ["Ciencia ficción", "Acción", "Aventura"],
    imageUrl: "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
  },
  {
    title: "El Hombre de Acero",
    releaseYear: 2013,
    genres: ["Acción", "Aventura", "Ciencia ficción"],
    imageUrl: "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
  },
  {
    title: "Coco",
    releaseYear: 2017,
    genres: ["Animación", "Aventura", "Comedia"],
    imageUrl: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
  },
];

const GENRES = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

const SORT_BY_OPTIONS = [
  { label: "Release Date", value: "release" },
  { label: "Title", value: "title" },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState(MOVIES);
  const [openMovieForm, setOpenMovieForm] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);

  function handleSearch(query) {
    setSearchText(query);
  }

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  function handleClickMovie(movie) {
    console.log(movie);
  }

  function handleEditMovie(movie) {
    console.log(movie);
  }

  function handleDeleteMovie(movie) {
    console.log(movie);
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
            <AtButton
              className="flex space-x-1 items-center justify-center bg-white opacity-[0.6] uppercase text-red-500 self-end px-4"
              onClick={() => setOpenMovieForm(true)}
            >
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

      <section className="grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <OrMovieTile
            {...movie}
            onClick={handleClickMovie}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
          />
        ))}
      </section>

      <footer className="w-full text-center bg-[#424242] py-4">
        <AtLogo />
      </footer>

      {openMovieForm && (
        <OrDialog
          title={selectedMovie ? "EDIT MOVIE" : "ADD MOVIE"}
          onClose={() => setOpenMovieForm(false)}
        >
          <div>Hola</div>
        </OrDialog>
      )}
    </div>
  );
}

export default App;
