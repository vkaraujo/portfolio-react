import { Box, Container, Grid, Typography, styled } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description: "A single-page React portfolio showcasing my skills and projects.",
    link: "#",
  },
  {
    title: "TMDB API App",
    description: "A movie and TV series listing app built with TypeScript and TMDB API.",
    link: "#",
  },
  {
    title: "Digital Clock",
    description: "A minimalistic digital clock project with React and styled-components.",
    link: "#",
  },
  {
    title: "Placeholder Project 1",
    description: "Description of the first placeholder project.",
    link: "#",
  },
  {
    title: "Placeholder Project 2",
    description: "Description of the second placeholder project.",
    link: "#",
  },
  {
    title: "Placeholder Project 3",
    description: "Description of the third placeholder project.",
    link: "#",
  },
];

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "80px 0",
  }));

  const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    padding: "30px", // Increased padding for a bigger card
    borderRadius: "12px", // Adjusted border radius for a more modern look
    textAlign: "center",
    transition: "transform 0.3s ease",
    boxShadow: theme.shadows[3], // Added a subtle shadow
    "&:hover": {
      transform: "scale(1.05)", // Slightly enlarge on hover
      boxShadow: theme.shadows[6], // More prominent shadow on hover
    },
  }));

  return (
    <StyledProjects id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;

