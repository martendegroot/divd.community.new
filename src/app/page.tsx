import { Header, VideoBanner } from "@/components";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main>
      <Header />
      <VideoBanner />
      <Container>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Make the web more safe. Join us.
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
          aware of security risks. Would you like to become part in this
          initiative? Then keep on reading on this webpage. This is an
          introductionary paragraph to symbolize how you can really motivate a
          visitor to engage more in other content.
        </Typography>
      </Container>
    </main>
  );
}
