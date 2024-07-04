import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Desc() {
  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        p="5rem"
        flexDirection="column"
        gap="15rem"
      >
        <Box
          bgcolor="black"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            sx={{
              backgroundImage: 'url("/vision.jpg")', // Correct path to your image
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensure the image covers the entire box
              width: "500px", // Adjust width as needed
              height: "500px", // Adjust height as needed
            }}
          />
          <Box display="flex" flexDirection="column" padding="2rem" gap="1rem">
            <Typography fontSize="1.8rem" color="white" maxWidth="30rem">
              In the summer of 2020, we reported our representation data and
              committed to doing so annually. One year later, we are pleased to
              share and update on our goals, our goals, our progress, and the
              work that still needs to be done.
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
                letterSpacing: "1px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box
          bgcolor="black"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box display="flex" flexDirection="column" padding="2rem" gap="1rem">
            <Typography fontSize="1.8rem" color="white" maxWidth="30rem">
              In our third episode of ON Air, we explore all that's happend
              within the last six moths, the reality if showing up every day as
              a <span style={{ color: "red" }}>BIPOC</span> employee in
              Corporate America, and ur future vision for diversity,equity,and
              inclusion.
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
                letterSpacing: "1px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Read More
            </Button>
          </Box>
          <Box
            sx={{
              backgroundImage: 'url("/Second.jpg")', // Correct path to your image
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensure the image covers the entire box
              width: "500px", // Adjust width as needed
              height: "500px", // Adjust height as needed
            }}
          />
        </Box>
        <Box
          bgcolor="black"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            sx={{
              backgroundImage: 'url("/third.jpg")', // Correct path to your image
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensure the image covers the entire box
              width: "500px", // Adjust width as needed
              height: "500px", // Adjust height as needed
            }}
          />
          <Box display="flex" flexDirection="column" padding="2rem" gap="1rem">
            <Typography fontSize="1.8rem" color="white" maxWidth="30rem">
              As a full-service partner to the world's most ambitious companies,
              we create transformational change through best-in-class digital
              products and communications.
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
              What we do
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
