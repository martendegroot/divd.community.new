import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export const Header = () => (
  <AppBar
    position="fixed"
    style={{
      background: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid",
      borderBottomColor: "rgba(255,255,255, 0.2)",
    }}
  >
    <Container maxWidth="lg">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "none",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button sx={{ marginRight: 3 }} color="inherit">
            About Us
          </Button>
          <Button sx={{ marginRight: 3 }} color="inherit">
            Events
          </Button>
          <Button sx={{ marginRight: 3 }} color="inherit">
            Join
          </Button>
          <Button sx={{ marginRight: 3 }} color="inherit">
            Resources
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
