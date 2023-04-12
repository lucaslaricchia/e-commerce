import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("Should render SearchBar with the components", () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });
});
