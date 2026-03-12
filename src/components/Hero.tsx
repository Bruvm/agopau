import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import hero from "../assets/img/hero.jpg";
import arrows from "../assets/img/arrows.png";
import Navbar from "./Navbar";
import { keyframes } from "@mui/system";

const heroFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "33.333%" },
          height: "100%",
          backgroundColor: "primary.main",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 3, md: 6 },
          color: "white",
          zIndex: 2,
        }}
      />

      <Box
        component="img"
        src={arrows}
        alt="arrows"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: { xs: "100%", sm: "50%", md: "33.333%" },
          display: "block",
          zIndex: 10,
        }}
      />

      <Box sx={{ position: "absolute", zIndex: 99, top: 0, left: 0, width: "100%" }}>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            p: 0,
            pt: "100px",
            px: {
              xs: 5,
              lg: 0,
            },
          }}
        >
          <Box
            sx={{
              opacity: 0,
              transform: "translateY(24px)",
              animation: `${heroFadeUp} 600ms ease-out 120ms forwards`,
              willChange: "opacity, transform",
            }}
          >
            <Grid container spacing={0} sx={{ mb: "50px" }}>
              <Grid size={{ xs: 12 }}>
                <Box mb={"10px"}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: "custom.white",
                      fontSize: {
                        xs: "3rem",
                        sm: "3rem",
                        lg: "3.5rem",
                      },
                      lineHeight: 1.1,
                    }}
                  >
                    Tu carga, en
                  </Typography>
                </Box>
                <Box mb={"10px"}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: "custom.white",
                      fontSize: {
                        xs: "3rem",
                        sm: "3rem",
                        lg: "3.5rem",
                      },
                      lineHeight: 1.1,
                    }}
                  >
                    manos seguras y
                  </Typography>
                </Box>
                <Box mb={"10px"}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: "custom.white",
                      fontSize: {
                        xs: "3rem",
                        sm: "3rem",
                        lg: "3.5rem",
                      },
                      lineHeight: 1.1,
                    }}
                  >
                    expertas
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }} mt={"25px"}>
                <Button
                  variant="contained"
                  size={isMobile ? "small" : "medium"}
                  href="#services"
                  sx={{
                    py: 1,
                    px: 3,
                    borderRadius: 0,
                    backgroundColor: "secondary.main",
                    boxShadow: "0px 6px 12px rgba(0,0,0,0.18)",
                    transition:
                      "transform 200ms ease-out, box-shadow 200ms ease-out, background-color 200ms ease-out",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                      transform: "translateY(-2px)",
                      boxShadow: "0px 10px 20px rgba(0,0,0,0.22)",
                    },
                  }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Nuestras cargas
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

