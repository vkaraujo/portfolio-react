import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../../components/NavBar/NavBar";

describe("NavBar Component", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders all menu items", () => {
    render(<NavBar />);

    const aboutItem = screen.getByRole("menuitem", { name: /about/i });
    const skillsItem = screen.getByRole("menuitem", { name: /skills/i });
    const projectsItem = screen.getByRole("menuitem", { name: /projects/i });

    expect(aboutItem).toBeInTheDocument();
    expect(skillsItem).toBeInTheDocument();
    expect(projectsItem).toBeInTheDocument();
  });

  it("calls handleScroll with the correct id when menu items are clicked", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    const aboutItem = screen.getByRole("menuitem", { name: /about/i });
    const skillsItem = screen.getByRole("menuitem", { name: /skills/i });
    const projectsItem = screen.getByRole("menuitem", { name: /projects/i });

    const mockScroll = vi.fn();
    vi.spyOn(document, "getElementById").mockImplementation((id) => {
      mockScroll(id);
      return {
        scrollIntoView: vi.fn(),
      } as unknown as HTMLElement;
    });

    await user.click(aboutItem);
    expect(mockScroll).toHaveBeenCalledWith("about");

    await user.click(skillsItem);
    expect(mockScroll).toHaveBeenCalledWith("skills");

    await user.click(projectsItem);
    expect(mockScroll).toHaveBeenCalledWith("projects");

    vi.restoreAllMocks();
  });
});

