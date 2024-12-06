import { render, screen } from "@testing-library/react";
import Skills from "../../../../pages/Home/sections/Skills/Skills";

describe("Skills Component", () => {
  it("renders the Skills heading", () => {
    render(<Skills />);
    const heading = screen.getByRole("heading", { level: 2, name: /skills/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the Backend Technologies section", () => {
    render(<Skills />);
    const backendHeading = screen.getByRole("heading", { level: 4, name: /backend technologies/i });
    expect(backendHeading).toBeInTheDocument();
  });

  it("renders the Frontend Technologies section", () => {
    render(<Skills />);
    const frontendHeading = screen.getByRole("heading", { level: 4, name: /frontend technologies/i });
    expect(frontendHeading).toBeInTheDocument();
  });

  it("renders all backend skills dynamically", () => {
    render(<Skills />);
    const backendSkills = screen.getAllByRole("heading", { level: 6 });
    const backendCount = backendSkills.filter(skill =>
      ["Ruby", "Rails", "SQL", "Postgres", "API-Rest"].includes(skill.textContent || "")
    ).length;
    expect(backendCount).toBe(5);
  });

  it("renders all frontend skills dynamically", () => {
    render(<Skills />);
    const frontendSkills = screen.getAllByRole("heading", { level: 6 });
    const frontendCount = frontendSkills.filter(skill =>
      ["JavaScript", "TypeScript", "React", "Tailwind CSS", "HTML", "Bootstrap"].includes(skill.textContent || "")
    ).length;
    expect(frontendCount).toBe(6);
  });

  it("renders skill logos with correct alt text", () => {
    render(<Skills />);
    const skillLogos = screen.getAllByRole("img");
    skillLogos.forEach((logo) => {
      expect(logo).toHaveAttribute("alt");
      expect(logo.getAttribute("alt")).toMatch(/logo$/i);
    });
  });
});
