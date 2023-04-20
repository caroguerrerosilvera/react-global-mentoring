import { screen, render } from "@testing-library/react";
import { MlMovieDetails } from "./MlMovieDetails";

describe("MlMovieDetails", () => {
  const movieDetails = {
    imageUrl: "https://via.placeholder.com/320x420.png?text=Movie+Poster",
    title: "Movie Title",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: "2022",
    rating: "8.9",
    duration: "120 mins",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et posuere auctor, felis risus pretium ipsum, quis faucibus augue quam sed arcu. Nullam sagittis ex justo, quis imperdiet lacus aliquet ac.",
  };

  it("renders correctly with movie details", () => {
    render(<MlMovieDetails {...movieDetails} />);

    expect(screen.getByAltText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Action, Adventure, Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("120 mins")).toBeInTheDocument();
    expect(screen.getByText("8.9")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et posuere auctor, felis risus pretium ipsum, quis faucibus augue quam sed arcu. Nullam sagittis ex justo, quis imperdiet lacus aliquet ac."
      )
    ).toBeInTheDocument();
  });
});
