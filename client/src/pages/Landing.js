// src/components/LandingPage.js
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import jobHunt from "../assets/job-hunt.svg";

const LandingPage = () => {
  return (
    <Container maxWidth="md">
      {/* Slogan */}
      <Typography variant="h6" align="center" paragraph>
        Get hired by top product based companies like
        <br />
        Google, Microsoft,
        <br />
        and more.
      </Typography>

      {/* Portrait Image */}
      {/* Portrait Image */}
      <Box mt={4} mb={4} textAlign="center">
        <img src={jobHunt} alt="Portrait" style={{ height: "450px" }} />
      </Box>

      {/* Log In Button */}
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
