import Button from "@mui/material/Button";
import styles from "./VideoBanner.module.css";
import PlayIcon from "@mui/icons-material/PlayArrow";

export const VideoBanner = () => (
  <div className={styles.container}>
    <video className={styles.video} src="/video2.mp4" autoPlay loop muted />
    <div className={styles.overlay} />
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <div>
          <div
            style={{
              border: "7px solid white",
              padding: "0 20px",
              paddingLeft: "25px",
              borderRadius: "999px",
              float: "left",
            }}
          >
            <span style={{ fontWeight: 900, margin: 0, fontSize: 75 }}>
              DIVD
            </span>
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 300,
              margin: "45px 0 0 15px",
              float: "left",
            }}
          >
            .community
          </div>
        </div>
        <div
          style={{
            marginLeft: 33,
            marginTop: 40,
            fontSize: "1.5em",
            fontWeight: 400,
            color: "yellow",
          }}
        >
          Stronger together
          <br />
          United as one community
        </div>
        <div
          style={{
            marginLeft: 33,
            marginTop: 13.5,
          }}
        >
          <Button
            variant="outlined"
            style={{ color: "#fff", borderColor: "#fff" }}
            endIcon={<PlayIcon />}
          >
            More about us
          </Button>
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={styles.wave}
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,144C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
);
