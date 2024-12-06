import { Container, Typography, styled } from "@mui/material";

const About = () => {
  const StyledAbout = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: "80px 0",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <StyledAbout id="about" aria-labelledby="about-heading">
      <Container maxWidth="lg">
        <Typography id="about-heading" variant="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center">
          I'm Viktor Araujo, a passionate backend developer with a strong focus
          on creating efficient and scalable solutions. With a deep love for
          coding and learning new technologies, I continuously strive to enhance
          my skills and deliver exceptional work.
        </Typography>
      </Container>
    </StyledAbout>
  );
};

export default About;
