import { render, fireEvent, screen } from "@testing-library/react";
import { MlCounter } from "./MlCounter";

describe("MlCounter", () => {
  test("renders initial value provided in props", () => {
    const initialValue = 5;
    render(<MlCounter initialValue={initialValue} />);

    expect(screen.getByText(initialValue.toString())).toBeInTheDocument();
  });

  test('click event on "decrement" button decrements the displayed value', () => {
    const initialValue = 5;
    render(<MlCounter initialValue={initialValue} />);

    fireEvent.click(screen.getByText("-"));

    expect(screen.getByText((initialValue - 1).toString())).toBeInTheDocument();
  });

  test('click event on "increment" button increments the displayed value', () => {
    const initialValue = 5;
    render(<MlCounter initialValue={initialValue} />);

    fireEvent.click(screen.getByText("+"));

    expect(screen.getByText((initialValue + 1).toString())).toBeInTheDocument();
  });
});
