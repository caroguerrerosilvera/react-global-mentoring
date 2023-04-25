import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { AtSortBy, AtButton, AtLogo } from "components/atoms";
import {
  MlSearchForm,
  MlGenreSelect,
  MlConfirmationDeleteMovie,
} from "components/molecules";
import { OrMovieTile, OrDialog, OrMovieForm } from "components/organisms";

const MOVIES = [
  {
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fWy0A3VojTCb0S2MKtEJjpquubF.jpg",
    title: "Battle of the Sexes",
    releaseYear: 2017,
    genres: ["Comedy", "Drama", "History"],
    rating: 6.8,
    runtime: 121,
    overview:
      "The true story of the 1973 tennis match between World number one Billie Jean King and ex-champ and serial hustler Bobby Riggs.",
  },
  {
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
    title: "Tenet",
    releaseYear: 2020,
    genres: ["Action", "Thriller", "Science Fiction"],
    rating: 7.2,
    runtime: 150,
    overview:
      "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
  },
  {
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    title: "Soul",
    releaseYear: 2020,
    genres: ["Animation", "Family", "Comedy", "Fantasy", "Drama"],
    rating: 8.2,
    runtime: 101,
    overview:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
  },
  {
    title: "Fight Club",
    releaseYear: 1999,
    genres: ["Drama", "Thriller", "Comedy"],
    imageUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    rating: 8.4,
    runtime: 139,
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  },
  {
    title: "Matrix",
    releaseYear: 1999,
    genres: ["Science Fiction", "Action"],
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.2,
    runtime: 136,
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  },
  {
    title: "Parasite",
    releaseYear: 2020,
    genres: ["Drama", "Comedy", "Thriller"],
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: 8.5,
    runtime: 173,
    overview: "",
  },
  {
    title: "Dead Poets Society",
    releaseYear: 1989,
    genres: ["Drama"],
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
    rating: 8.3,
    runtime: 168,
    overview:
      "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
  },
  {
    title: "Interstellar",
    releaseYear: 2014,
    genres: ["Science Fiction", "Drama"],
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.4,
    runtime: 209,
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  },
  {
    title: "El Laberinto del Fauno",
    releaseYear: 2006,
    genres: ["Fantasy", "Drama"],
    imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s8C4whhKtDaJvMDcyiMvx3BIF5F.jpg",
    rating: 7.8,
    runtime: 178,
    overview:
      "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks.",
  },
  {
    title: "Jurassic Park",
    releaseYear: 1993,
    genres: ["Science Fiction", "Action", "Adventura"],
    imageUrl: "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    rating: 7.9,
    runtime: 127,
    overview:
      "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
  },
  {
    title: "Man of Steel",
    releaseYear: 2013,
    genres: ["Action", "Adventura", "Science Fiction"],
    imageUrl: "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
    rating: 6.6,
    runtime: 143,
    overview:
      "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
  },
  {
    title: "Coco",
    releaseYear: 2017,
    genres: ["Animation", "Adventura", "Comedy"],
    imageUrl: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    rating: 8.2,
    runtime: 105,
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
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
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
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
    console.log("handleClickMovie");
  }

  function handleEditMovie(movie) {
    setOpenMovieForm(true);
    setSelectedMovie(movie);
  }

  function handleDeleteConfirmation(movie) {
    setOpenDeleteConfirmation(true);
    setSelectedMovie(movie);
  }

  function handleDeleteMovie(movie) {
    console.log("handleDeleteMovie");
  }

  function handleCloseModals() {
    setOpenMovieForm(false);
    setOpenDeleteConfirmation(false);
    setSelectedMovie(null);
  }

  return (
    <div className="flex flex-col space-y-8 mx-auto max-w-5xl" id="root">
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
              FIND YOUR MOVIE
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
            key={movie.title}
            movie={movie}
            onClick={handleClickMovie}
            onEdit={handleEditMovie}
            onDelete={handleDeleteConfirmation}
          />
        ))}
      </section>

      <footer className="w-full text-center bg-[#424242] py-4">
        <AtLogo />
      </footer>

      <OrDialog
        open={openMovieForm}
        title={selectedMovie ? "EDIT MOVIE" : "ADD MOVIE"}
        onClose={handleCloseModals}
      >
        <OrMovieForm movieInfo={selectedMovie} />
      </OrDialog>

      <OrDialog
        title="DELETE MOVIE"
        open={openDeleteConfirmation}
        onClose={handleCloseModals}
      >
        <MlConfirmationDeleteMovie
          movie={selectedMovie}
          handleDelete={handleDeleteMovie}
        />
      </OrDialog>
    </div>
  );
}

export default App;
