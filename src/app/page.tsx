import { Carousel, Header, VideoBanner } from "@/components";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel";
import PlayIcon from "@mui/icons-material/PlayArrow";

const OPTIONS: EmblaOptionsType = { axis: "y" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main>
      <Header />
      <VideoBanner />
      <Container>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Making the web more safe. Together.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.15em",
            maxWidth: "75%",
            marginTop: 5,
            marginLeft: "35px",
          }}
        >
          Keeping the web space a safe space for all is not a one-man-job. That
          is exactly why we could use your help. Through events like workshops
          and trainings or course materials we help organizations to become more
          aware of security risks.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.15em",
            maxWidth: "75%",
            marginTop: 5,
            marginLeft: "35px",
          }}
        >
          We have gathered a strong set of tools to research the current state
          of the web. Behind this initiative we stand with a group of experts in
          the field. Would you like to contribute, learn and become part of a
          trend-shaping community?
        </Typography>
      </Container>
      <Container sx={{ marginTop: 10, display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: "33%",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "90%",
              height: "100%",
            },
          }}
        >
          <Paper elevation={0} sx={{ backgroundColor: "yellow" }}>
            <Typography
              variant="h2"
              sx={{ color: "black", marginLeft: "30px", marginTop: 2 }}
            >
              Upcoming Events
            </Typography>
            <Button
              variant="outlined"
              style={{
                color: "#000",
                borderColor: "#000",
                margin: "25px 30px",
              }}
              endIcon={<PlayIcon />}
            >
              Check our calendar
            </Button>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "66%",
            margin: 1,
          }}
        >
          <Carousel slides={SLIDES} options={OPTIONS} />
        </Box>
      </Container>
    </main>
  );
}
