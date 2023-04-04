import React from "react";
import { MlGenreSelect } from "./MlGenreSelect";

export default {
  title: "Components/MlGenreSelect",
  component: MlGenreSelect,
};

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"];
const selectedGenre = "Drama";

const Template = (args) => <MlGenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres,
  selectedGenre,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const NoGenres = Template.bind({});
NoGenres.args = {
  genres: [],
  selectedGenre,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const NoSelectedGenre = Template.bind({});
NoSelectedGenre.args = {
  genres,
  selectedGenre: null,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  genres,
  selectedGenre,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
  style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "5px",
  },
};
