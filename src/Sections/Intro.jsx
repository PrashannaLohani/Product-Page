import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Intro() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <video width="100%" height="100%" autoPlay loop muted preload="auto">
        <source src="/firstpage.mp4" type="video/mp4" />
      </video>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          background:
            "linear-gradient(45deg, rgba(0,0,0,0.90) 50%, rgba(252,252,252,0) 97%)",
          zIndex: 2, // Ensures the gradient is above the video
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        padding="2rem"
        sx={{
          zIndex: 3, // Ensures the text is above the gradient box
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="3rem"
          gap="1rem"
        >
          <Typography variant="h1" color="white" fontWeight="800">
            Build. Grow. Serve.
          </Typography>
          <Typography variant="h5" color="white">
            We are investing $3 million over the next three years in our <br />{" "}
            Build|Grow|Serve program, created to support and empower{" "}
            <span style={{ color: "red" }}>Black</span> and <br />{" "}
            <span style={{ color: "red" }}>underpresented </span>communities.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "2rem",
              maxWidth: "12rem",
              p: "1rem",
              letterSpacing: "3px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
