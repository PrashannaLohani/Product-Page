import { Box } from "@mui/material";
import Intro from "../Sections/Intro";
import Video from "../Sections/Video";
import Desc from "../Sections/Desc";

export default function Home() {
  return (
    <>
      <Box>
        <Intro />
        <Video />
        <Desc />
      </Box>
    </>
  );
}
