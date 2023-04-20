import { screen, render, fireEvent } from "@testing-library/react";
import { AtInput } from "./AtInput";

describe("AtInput", () => {
  it("renders correctly with default props", () => {
    render(
      <AtInput placeholder="Type something" type="text" label="Input Label" />
    );
    const input = screen.getByPlaceholderText("Type something");
    expect(input).toBeInTheDocument();
  });

  it("handles input changes", () => {
    const handleChange = jest.fn();
    render(
      <AtInput
        placeholder="Type something"
        type="text"
        label="Input Label"
        onChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText("Type something");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("Hello");
  });
});
