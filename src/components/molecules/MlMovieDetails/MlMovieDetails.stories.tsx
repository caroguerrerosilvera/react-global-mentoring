import { Meta } from "@storybook/react";
import { MlMovieDetails } from "./MlMovieDetails";

export default {
  title: "Molecules/MlMovieDetails",
  component: MlMovieDetails,
} as Meta;

const Template = (args) => (
  <div className="bg-neutral-900 p-8">
    <MlMovieDetails {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/320x420.png?text=Movie+Poster",
  title: "Movie Title",
  genres: ["Action", "Adventure", "Sci-Fi"],
  releaseYear: "2022",
  rating: "8.9",
  duration: "120 mins",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et posuere auctor, felis risus pretium ipsum, quis faucibus augue quam sed arcu. Nullam sagittis ex justo, quis imperdiet lacus aliquet ac.",
};
