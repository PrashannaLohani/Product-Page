import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <Box
        minHeight="50vh"
        p="3rem"
        display="flex"
        justifyContent="space-around"
        mt="5rem"
        gap="8rem"
      >
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box>
            <Typography
              variant="h3"
              fontFamily="typography"
              color="primary.main"
            >
              BLⱯCK
            </Typography>
            <Typography variant="body1" color="primary.main">
              Build. Grow. Serve.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="red">
              About us
            </Typography>
            <Typography variant="body2" color="primary.main">
              We enrich human lives through the <br />
              thoughtful application of design and technology.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="red">
              Contact us
            </Typography>
            <Box display="flex" alignItems="center" mt="0.5rem" gap="1rem">
              <PhoneInTalkIcon sx={{ color: "red", height: "20px" }} />
              <Typography variant="body2" color="primary.main">
                +977 9800000002
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt="0.5rem" gap="1rem">
              <EmailIcon sx={{ color: "red", height: "20px" }} />
              <Typography variant="body2" color="primary.main">
                youremailid.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem" mt="2rem">
          <Box>
            <Typography variant="h5" color="red" fontWeight="500">
              Information
            </Typography>
            <Box mt="1rem" display="flex" flexDirection="column" gap="0.5rem">
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                About us
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                More Search
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Blog
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Testimonials
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Events
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem" mt="2rem">
          <Box>
            <Typography variant="h5" color="red" fontWeight="500">
              Helpful Links
            </Typography>
            <Box mt="1rem" display="flex" flexDirection="column" gap="0.5rem">
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Services
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Supports
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Terms & Condition
              </Typography>
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ cursor: "pointer" }}
              >
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem" mt="5rem">
          <Typography variant="h6" color="primary.main" fontWeight="500">
            Stay Connected{" "}
          </Typography>
          <FormControl>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "black" }} />
                </InputAdornment>
              }
              placeholder=" Enter your email"
              type="email"
              disableUnderline="true"
              sx={{
                bgcolor: "primary.main",
                borderRadius: "5px ",
                p: "10px",
                fontFamily: "monospace",
              }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "red", mt: "1rem", maxWidth: "10rem" }}
            >
              Subscribe
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Box
        padding="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        gap="20rem"
      >
        <Box display="flex" gap="1rem">
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "black",
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "black",
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
            }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "black",
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
            }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "black",
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="caption" color="primary.main">
            2022&#169; company.Ltd. All Right reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
