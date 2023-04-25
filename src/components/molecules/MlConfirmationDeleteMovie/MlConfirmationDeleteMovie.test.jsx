import { render, fireEvent, screen } from "@testing-library/react";
import { MlConfirmationDeleteMovie } from "./MlConfirmationDeleteMovie";

describe("MlConfirmationDeleteMovie", () => {
  const movie = { title: "The Shawshank Redemption" };
  const handleDeleteMock = jest.fn();

  afterEach(() => {
    handleDeleteMock.mockClear();
  });

  it("displays the movie title in the confirmation message", () => {
    render(
      <MlConfirmationDeleteMovie
        movie={movie}
        handleDelete={handleDeleteMock}
      />
    );
    const confirmationMessage = screen.getByText(
      `Are you sure you want to delete ${movie.title}?`
    );
    expect(confirmationMessage).toBeInTheDocument();
  });

  it("calls handleDelete when the confirm button is clicked", () => {
    render(
      <MlConfirmationDeleteMovie
        movie={movie}
        handleDelete={handleDeleteMock}
      />
    );
    const confirmButton = screen.getByText("CONFIRM");
    fireEvent.click(confirmButton);
    expect(handleDeleteMock).toHaveBeenCalledWith(movie);
  });

  it("renders AtButton with the correct className and text", () => {
    render(
      <MlConfirmationDeleteMovie
        movie={movie}
        handleDelete={handleDeleteMock}
      />
    );
    const confirmButton = screen.getByText("CONFIRM");
    expect(confirmButton).toHaveClass(
      "p-2 bg-red-500 text-white px-5 py-3 rounded-sm self-end"
    );
  });
});
