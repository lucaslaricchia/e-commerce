import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("Should render links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
