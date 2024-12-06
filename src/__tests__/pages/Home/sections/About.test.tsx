import { render, screen } from '@testing-library/react';
import About from '../../../../pages/Home/sections/About/About';

describe('About Section', () => {
  it('renders the About section with the correct heading', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 2, name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the About section with the correct paragraph', () => {
    render(<About />);
    const paragraph = screen.getByText(
      /i'm viktor araujo, a passionate backend developer with a strong focus on creating efficient and scalable solutions/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('ensures the About section is labeled correctly', () => {
    render(<About />);
    const section = screen.getByRole('region', { name: /about me/i });
    expect(section).toBeInTheDocument();
  });
});

