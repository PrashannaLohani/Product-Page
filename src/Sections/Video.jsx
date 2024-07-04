import React from "react";
import { Box, Typography } from "@mui/material";

export default function Video() {
  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          minHeight="40vh"
          minWidth="30vw"
          bgcolor="#0F0F0F"
          position="absolute"
          top="0"
          left="5%"
          zIndex="1"
        />
        <Box
          minHeight="40vh"
          minWidth="30vw"
          bgcolor="#141E46"
          position="absolute"
          right={0}
          bottom={0}
          zIndex="1"
        />
        <Box
          minHeight="30vh"
          minWidth="10vw"
          bgcolor="#5C8374"
          position="absolute"
          left="0"
          bottom={0}
          zIndex="2"
        />

        <Box
          minHeight="10vh"
          minWidth="30vw"
          bgcolor="#686D76"
          position="absolute"
          right={0}
          top="5%"
          zIndex="2"
        />

        <video
          width="70%"
          height="70%"
          autoFocus
          controls
          preload="auto"
          style={{ zIndex: "3" }}
        >
          <source src="/Black.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box
        minHeight="50vh"
        p="3rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          maxWidth="50rem"
          fontWeight="500"
        >
          We enrich <span style={{ color: "red" }}>human</span> lives through
          the thoughtful application of design and technology
        </Typography>
      </Box>
    </>
  );
}
