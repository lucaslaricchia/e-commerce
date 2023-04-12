import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("Should render Header with the components", () => {
    render(<Header />);

    expect(screen.getByAltText("Company Logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Contact")).toHaveAttribute("href", "/contact");
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });
});
