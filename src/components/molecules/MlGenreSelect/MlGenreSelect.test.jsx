import { render, fireEvent, screen } from "@testing-library/react";
import { MlGenreSelect } from "./MlGenreSelect";

describe("MlGenreSelect", () => {
  test("renders all genres passed in props", () => {
    const genres = ["Action", "Adventure", "Comedy"];
    render(<MlGenreSelect genres={genres} />);

    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  test("highlights a selected genre passed in props", () => {
    const genres = ["Action", "Adventure", "Comedy"];
    const selectedGenre = "Adventure";
    render(<MlGenreSelect genres={genres} selectedGenre={selectedGenre} />);

    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass(
      "border-b-4",
      "border-red-500",
      "rounded-none"
    );
  });

  test('click event on a genre button calls "onChange" callback and passes correct genre in arguments', () => {
    const genres = ["Action", "Adventure", "Comedy"];
    const onSelect = jest.fn();
    render(<MlGenreSelect genres={genres} onSelect={onSelect} />);

    const genreToSelect = "Comedy";
    fireEvent.click(screen.getByText(genreToSelect));

    expect(onSelect).toHaveBeenCalledWith(genreToSelect);
  });
});
