import { render, screen } from "@testing-library/react";
import Home from "../../../pages/Home/Home";

describe("Home Component", () => {
  it("renders the NavBar component", () => {
    render(<Home />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });

  it("renders the Hero component", () => {
    render(<Home />);
    const heroHeading = screen.getByRole("heading", { level: 1, name: /viktor araujo/i });
    expect(heroHeading).toBeInTheDocument();
  });

  it("renders the About component", () => {
    render(<Home />);
    const aboutHeading = screen.getByRole("heading", { level: 2, name: /about me/i });
    expect(aboutHeading).toBeInTheDocument();
  });

  it("renders the Skills component", () => {
    render(<Home />);
    const skillsHeading = screen.getByRole("heading", { level: 2, name: /skills/i });
    expect(skillsHeading).toBeInTheDocument();
  });

  it("renders the Projects component", () => {
    render(<Home />);
    const projectsHeading = screen.getByRole("heading", { level: 2, name: /projects/i });
    expect(projectsHeading).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(<Home />);
    const footerText = screen.getByText(/developed by/i);
    expect(footerText).toBeInTheDocument();
  });
});
