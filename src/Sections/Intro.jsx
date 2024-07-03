import React from "react";
import { Box, Typography } from "@mui/material";

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
        }}
      >
        <Box
          display="flex"
      
          alignItems="center"
          height="100%"
        >
          <Typography
            variant="h2"
            color="white"
            sx={{
              textAlign: "center",
              p: 2,
            }}
          >
            Your Text Here
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
