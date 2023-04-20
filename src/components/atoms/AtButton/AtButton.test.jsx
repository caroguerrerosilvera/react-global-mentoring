import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AtButton from "./AtButton";

describe("AtButton", () => {
  it("renders correctly with default props", () => {
    render(<AtButton>Click me</AtButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<AtButton onClick={handleClick}>Click me</AtButton>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
