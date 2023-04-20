import { screen, render, fireEvent } from "@testing-library/react";
import { AtSortBy } from "./AtSortBy";

describe("AtSortBy", () => {
  const handleChange = jest.fn();

  const options = [
    { label: "Release Date", value: "release-date" },
    { label: "Title", value: "title" },
  ];

  it("renders correctly with default props", () => {
    render(
      <AtSortBy
        label="Sort by"
        id="sort-by"
        currentValue="release-date"
        handleChange={handleChange}
        options={options}
        styles={{
          label: "text-lg font-medium text-gray-700",
          options: "py-2 px-4 bg-gray-200 rounded-md",
        }}
      />
    );

    const select = screen.getByLabelText("Sort by");
    expect(select).toBeInTheDocument();
    expect(select.value).toBe("release-date");
  });

  it("calls handleChange when select value changes", () => {
    render(
      <AtSortBy
        label="Sort by"
        id="sort-by"
        currentValue="release-date"
        handleChange={handleChange}
        options={options}
        styles={{
          label: "text-lg font-medium text-gray-700",
          options: "py-2 px-4 bg-gray-200 rounded-md",
        }}
      />
    );

    const select = screen.getByLabelText("Sort by");
    fireEvent.change(select, { target: { value: "title" } });
    expect(handleChange).toHaveBeenCalledWith("title");
  });
});
