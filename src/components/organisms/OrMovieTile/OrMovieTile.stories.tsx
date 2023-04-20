import { Meta } from "@storybook/react";
import { OrMovieTile } from "./OrMovieTile";

export default {
  title: "Organisms/OrMovieTile",
  component: OrMovieTile,
} as Meta;

const Template = (args) => (
  <div className="bg-neutral-800 p-6">
    <OrMovieTile {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/500x500.png?text=Movie+Poster",
  title: "Movie Title",
  genres: ["Action", "Adventure", "Sci-Fi"],
  releaseYear: "2022",
  onClick: () => console.log("Tile clicked!"),
  onEdit: () => console.log("Edit clicked!"),
  onDelete: () => console.log("Delete clicked!"),
};
