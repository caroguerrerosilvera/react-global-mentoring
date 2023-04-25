import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { OrMovieForm } from "./OrMovieForm";

describe("OrMovieForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it("renders the form fields", () => {
    render(<OrMovieForm />);
    expect(screen.getByLabelText("TITLE")).toBeInTheDocument();
    expect(screen.getByLabelText("RELEASE YEAR")).toBeInTheDocument();
    expect(screen.getByLabelText("COVER URL")).toBeInTheDocument();
    expect(screen.getByLabelText("RATING")).toBeInTheDocument();
    expect(screen.getByLabelText("GENRES")).toBeInTheDocument();
    expect(screen.getByLabelText("RUNTIME")).toBeInTheDocument();
    expect(screen.getByLabelText("OVERVIEW")).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted with valid data", () => {
    render(<OrMovieForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText("TITLE"), {
      target: { value: "Test Movie" },
    });
    fireEvent.change(screen.getByLabelText("RELEASE YEAR"), {
      target: { value: "2022" },
    });
    fireEvent.change(screen.getByLabelText("COVER URL"), {
      target: { value: "https://test.com/image.jpg" },
    });
    fireEvent.change(screen.getByLabelText("RATING"), {
      target: { value: "8" },
    });
    fireEvent.change(screen.getByLabelText("GENRES"), {
      target: { value: "Action, Adventure" },
    });
    fireEvent.change(screen.getByLabelText("RUNTIME"), {
      target: { value: "120" },
    });
    fireEvent.change(screen.getByLabelText("OVERVIEW"), {
      target: { value: "Test overview" },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Test Movie",
      releaseYear: "2022",
      imageUrl: "https://test.com/image.jpg",
      rating: 8,
      genres: "Action, Adventure",
      runtime: "120",
      overview: "Test overview",
    });
  });
});
