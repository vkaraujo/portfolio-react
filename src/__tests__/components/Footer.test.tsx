import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer/Footer";

describe("Footer Component", () => {
    it("renders the developer's name", () => {
      render(<Footer />);
      const developerName = screen.getByText((content, element) => {
          return element?.textContent === "Developed by Viktor Araujo";
      });
      expect(developerName).toBeInTheDocument();
    });

  it("renders the current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    const yearText = screen.getByText(new RegExp(`© ${currentYear} All Rights Reserved\\.`));
    expect(yearText).toBeInTheDocument();
  });

  it("has the correct background and text color", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveStyle({
      backgroundColor: "#1976d2",
      color: "#fff",
    });
  });
});
