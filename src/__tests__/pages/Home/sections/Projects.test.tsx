import { render, screen } from "@testing-library/react";
import Projects from "../../../../pages/Home/sections/Projects/Projects";

describe("Projects Component", () => {
  it("renders the Projects heading", () => {
    render(<Projects />);
    const heading = screen.getByRole("heading", { level: 2, name: /projects/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("heading", { level: 5 });
    expect(projectTitles).toHaveLength(3);
    expect(projectTitles[0]).toHaveTextContent("Portfolio Website");
    expect(projectTitles[1]).toHaveTextContent("TMDB API App");
    expect(projectTitles[2]).toHaveTextContent("Digital Clock");
  });

  it("renders descriptions for projects", () => {
    render(<Projects />);
    expect(
      screen.getByText(/a single-page react portfolio showcasing my skills and projects/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a movie and tv series listing app built with react and tmdb api/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a minimalistic digital clock project with react and styled-components/i)
    ).toBeInTheDocument();
  });

  it("renders a placeholder for projects without a live link", () => {
    render(<Projects />);
    const placeholder = screen.getByText(/no live preview available/i);
    expect(placeholder).toBeInTheDocument();
  });
});
