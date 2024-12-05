import { Box, Container, Grid, Typography, styled } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description: "A single-page React portfolio showcasing my skills and projects.",
    repoLink: "https://github.com/vkaraujo/portfolio",
    liveLink: "#",
  },
  {
    title: "TMDB API App",
    description: "A movie and TV series listing app built with React and TMDB API.",
    repoLink: "https://github.com/vkaraujo/reactmovies",
    liveLink: "https://reactmovies-iota.vercel.app/",
  },
  {
    title: "Digital Clock",
    description: "A minimalistic digital clock project with React and styled-components.",
    repoLink: "https://github.com/vkaraujo/digital-clock",
    liveLink: null, // No live link
  },
];

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "80px 0",
  }));

  const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[6],
    },
  }));

  const StyledIframe = styled("iframe")(() => ({
    width: "100%",
    height: "200px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "15px",
  }));

  const Placeholder = styled("div")(({ theme }) => ({
    width: "100%",
    height: "200px",
    borderRadius: "8px",
    backgroundColor: theme.palette.grey[300],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    fontSize: "14px",
    color: theme.palette.text.secondary,
  }));

  const StyledLink = styled("a")(() => ({
    display: "inline-block",
    margin: "10px 5px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#286ca7",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease", // Smooth hover transition
    "&:hover": {
      backgroundColor: "#218838", // Darker shade for hover
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
                {project.liveLink ? (
                  <StyledIframe
                    src={project.liveLink}
                    title={`${project.title} preview`}
                  />
                ) : (
                  <Placeholder>No Live Preview Available</Placeholder>
                )}
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <StyledLink
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                    >
                  Repository
                  </StyledLink>
                {project.liveLink && (
                  <StyledLink
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                    >
                    Live Version
                  </StyledLink>
                )}
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
