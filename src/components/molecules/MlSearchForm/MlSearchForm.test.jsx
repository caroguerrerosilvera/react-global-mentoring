import { render, fireEvent, screen } from "@testing-library/react";
import { MlSearchForm } from "./MlSearchForm";

describe("MlSearchForm", () => {
  test("renders an input with the value equal to initial value passed in props", () => {
    const initialSearchQuery = "test search";
    render(<MlSearchForm initialSearchQuery={initialSearchQuery} />);

    expect(screen.getByDisplayValue(initialSearchQuery)).toBeInTheDocument();
  });

  test('typing to the input and click event on Submit button calls "onChange" prop with proper value', () => {
    const initialSearchQuery = "test search";
    const newSearchQuery = "new search";
    const onSearch = jest.fn();
    render(
      <MlSearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearch}
      />
    );

    fireEvent.change(screen.getByDisplayValue(initialSearchQuery), {
      target: { value: newSearchQuery },
    });
    fireEvent.click(screen.getByText("Search"));

    expect(onSearch).toHaveBeenCalledWith(newSearchQuery);
  });

  test('typing to the input and pressing Enter key calls "onChange" prop with proper value', () => {
    const initialSearchQuery = "test search";
    const newSearchQuery = "new search";
    const onSearch = jest.fn();
    render(
      <MlSearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearch}
      />
    );

    fireEvent.change(screen.getByDisplayValue(initialSearchQuery), {
      target: { value: newSearchQuery },
    });
    fireEvent.keyPress(screen.getByDisplayValue(newSearchQuery), {
      key: "Enter",
      charCode: 13,
    });

    expect(onSearch).toHaveBeenCalledWith(newSearchQuery);
  });
});
