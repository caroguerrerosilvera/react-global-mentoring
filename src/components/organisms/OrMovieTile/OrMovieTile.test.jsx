import { screen, render, fireEvent } from "@testing-library/react";
import { OrMovieTile } from "./OrMovieTile";

describe("OrMovieTile", () => {
  const props = {
    imageUrl: "https://via.placeholder.com/500x500.png?text=Movie+Poster",
    title: "Movie Title",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: "2022",
    onClick: jest.fn(),
    onEdit: jest.fn(),
    onDelete: jest.fn(),
  };

  it("renders correctly with movie details", () => {
    render(<OrMovieTile {...props} />);

    expect(screen.getByAltText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Action, Adventure, Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
  });

  it("calls onClick when tile is clicked", () => {
    render(<OrMovieTile {...props} />);
    fireEvent.click(screen.getByAltText("Movie Title"));
    expect(props.onClick).toHaveBeenCalled();
  });
});
