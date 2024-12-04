import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem onClick={() => handleScroll("about")}>About</MenuItem>
          <MenuItem onClick={() => handleScroll("skills")}>Skills</MenuItem>
          <MenuItem onClick={() => handleScroll("projects")}>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
