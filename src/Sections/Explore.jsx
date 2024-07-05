import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Explore() {
  return (
    <>
      <Box
        minHeight="50vh"
        p="3rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="3rem"
      >
        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          maxWidth="50rem"
          fontWeight="400"
        >
          Explore a few of our most impactful projects
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
          Our Work
        </Button>
      </Box>
      <Box
        minHeight="auto"
        p="4rem"
        display="flex"
        flexWrap="wrap"
        gap="2rem"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          minHeight="auto"
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          gap="1rem"
        >
          <Box
            sx={{
              backgroundImage: 'url("/Levis.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "500px",
              height: "500px",
              transition:
                "background-image 0.7s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              "&:hover": {
                opacity: 0.6,
              },
            }}
          />

          <Typography
            variant="h5"
            color="white"
            fontWeight="600"
            fontFamily="monospace"
          >
            Levi's
          </Typography>
          <Typography
            variant="body2"
            color="white"
            fontWeight="600"
            fontFamily="monospace"
            maxWidth="30rem"
          >
            We partnered with Levi's, an icon of American industry and culture,
            to reimagine levi.com for a new generation of shoppers and the
            digital future of retail.
          </Typography>
        </Box>
        <Box
          minHeight="auto"
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          gap="1rem"
        >
          <Box
            sx={{
              backgroundImage: 'url("/dropbox-img.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "500px",
              height: "500px",
              transition:
                "background-image 0.7s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              "&:hover": {
                opacity: 0.6,
              },
            }}
          />

          <Typography
            variant="h5"
            color="white"
            fontWeight="600"
            fontFamily="monospace"
          >
            Dropbox Brand Campaign
          </Typography>
          <Typography
            variant="body2"
            color="white"
            fontWeight="600"
            fontFamily="monospace"
            maxWidth="30rem"
          >
            Dropbox is on a path to becoming a multi-product company. to bring
            their customers new and old along for that journey, we helped
            reimagine how Dropbox engages with their audience.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
