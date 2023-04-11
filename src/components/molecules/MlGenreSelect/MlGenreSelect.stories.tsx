import { MlGenreSelect } from "./MlGenreSelect";

export default {
  title: "Molecules/MlGenreSelect",
  component: MlGenreSelect,
};

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"];
const selectedGenre = "Drama";

const Template = (args) => (
  <div className="bg-slate-700">
    <MlGenreSelect {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  genres,
  selectedGenre,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const NoSelectedGenre = Template.bind({});
NoSelectedGenre.args = {
  genres,
  selectedGenre: null,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};
