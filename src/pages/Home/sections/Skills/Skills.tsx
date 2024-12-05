import { Box, Container, Grid, Typography, styled } from "@mui/material";
import HtmlLogo from "../../../../assets/logos/html5.svg";
import JavaScriptLogo from "../../../../assets/logos/javascript.svg";
import PostgresLogo from "../../../../assets/logos/postgresql.svg";
import ReactLogo from "../../../../assets/logos/react.svg";
import RubyLogo from "../../../../assets/logos/ruby.svg";
import RailsLogo from "../../../../assets/logos/rubyonrails.svg";
import SqlLogo from "../../../../assets/logos/sql.svg";
import TailwindLogo from "../../../../assets/logos/tailwindcss.svg";
import TypeScriptLogo from "../../../../assets/logos/typescript.svg";
import BootstrapLogo from "../../../../assets/logos/bootstrap.svg";
import ApiLogo from "../../../../assets/logos/api.svg";

const skills = {
  frontend: [
    { name: "JavaScript", color: "#F7DF1E", logo: JavaScriptLogo },
    { name: "TypeScript", color: "#007ACC", logo: TypeScriptLogo },
    { name: "React", color: "#61DAFB", logo: ReactLogo },
    { name: "Tailwind CSS", color: "#38B2AC", logo: TailwindLogo },
    { name: "HTML", color: "#E34F26", logo: HtmlLogo },
    { name: "Bootstrap", color: "#7952B3", logo: BootstrapLogo}
  ],
  backend: [
    { name: "Ruby", color: "#CC342D", logo: RubyLogo },
    { name: "Rails", color: "#A30000", logo: RailsLogo },
    { name: "SQL", color: "#003B57", logo: SqlLogo },
    { name: "Postgres", color: "#336791", logo: PostgresLogo },
    { name: "API-Rest", color: "#00B5AD", logo: ApiLogo },
  ],
};

const Skills = () => {
  const StyledSkills = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    padding: "80px 20px",
  }));

  const SkillBox = styled(Box)(({ color }: { color: string }) => ({
    backgroundColor: color,
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    },
  }));

  const Logo = styled("img")(() => ({
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  }));

  const SectionHeader = styled(Box)(({ theme }) => ({
    margin: "20px auto 40px",
    textAlign: "center",
    position: "relative",
    width: "100%",
    "& h4": {
      margin: 0,
      position: "relative",
      display: "inline-block",
      paddingBottom: "10px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      backgroundColor: theme.palette.primary.main,
    },
  }));

  return (
    <StyledSkills id="skills">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Skills
        </Typography>
        {/* Backend Section */}
        <SectionHeader>
          <Typography variant="h4">Backend Technologies</Typography>
        </SectionHeader>
        <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: "80px" }}>
          {skills.backend.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillBox color={skill.color}>
                <Logo src={skill.logo} alt={`${skill.name} logo`} />
                <Typography variant="h6">{skill.name}</Typography>
              </SkillBox>
            </Grid>
          ))}
        </Grid>
        {/* Frontend Section */}
        <SectionHeader>
          <Typography variant="h4">Frontend Technologies</Typography>
        </SectionHeader>
        <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: "80px" }}>
          {skills.frontend.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillBox color={skill.color}>
                <Logo src={skill.logo} alt={`${skill.name} logo`} />
                <Typography variant="h6">{skill.name}</Typography>
              </SkillBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;

