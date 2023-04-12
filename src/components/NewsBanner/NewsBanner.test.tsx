import { screen, render } from "@testing-library/react";
import { NewsBanner } from "./NewsBanner";

describe("NewsBanner", () => {
  test("Should render NewsBanner with the components", () => {
    render(<NewsBanner />);

    expect(screen.getAllByAltText("News Banner")).toHaveLength(4);
    expect(screen.getByTestId("news-banner-container")).toBeInTheDocument();
    expect(screen.getByText("News Title")).toBeInTheDocument();
  });
});
