import { render, screen } from "@testing-library/react";
import StyledButton from "../../components/StyledButton/StyledButton";

describe("StyledButton Component", () => {
  it("renders the button with the provided children", () => {
    render(<StyledButton>Click Me</StyledButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
