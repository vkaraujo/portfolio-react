import { render, screen } from '@testing-library/react';
import Hero from "../../../../pages/Home/sections/Hero/Hero";

describe('Hero Section', () => {
  it('renders the avatar image', () => {
    render(<Hero />);
    const avatar = screen.getByRole('img', { name: /viktor araujo's avatar/i });
    expect(avatar).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1, name: /viktor araujo/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the secondary heading', () => {
    render(<Hero />);
    const subheading = screen.getByRole('heading', { level: 2, name: /backend developer/i });
    expect(subheading).toBeInTheDocument();
  });

  it('renders the buttons with correct content', () => {
    render(<Hero />);
    
    const downloadButton = screen.getByRole('button', { name: /download cv/i });
    const contactButton = screen.getByRole('button', { name: /contact me/i });
    
    expect(downloadButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
  });

  it('renders the AnimatedBackground component', () => {
    render(<Hero />);
    const animatedBackground = screen.getByTestId('animated-background');
    expect(animatedBackground).toBeInTheDocument();
  });
});
