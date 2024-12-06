import { Box, Container, Typography, styled } from "@mui/material";

const Footer = () => {
  const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
  }));

  return (
    <StyledFooter role="contentinfo">
      <Container maxWidth="lg">
        <Typography variant="body1">
          Developed by <strong>Viktor Araujo</strong>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "8px" }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
