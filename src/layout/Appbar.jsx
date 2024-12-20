// Appbar.js or Appbar.tsx

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "2rem",
          bgcolor: "#000",
        }}
      >
        <Typography variant="h4" fontFamily="typography" color="primary.main">
          BLⱯCK
        </Typography>
        <Box display="flex" gap="5rem">
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            WHAT WE DO
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            WHO ARE WE
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            BEING HERE
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            CAREERS
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
