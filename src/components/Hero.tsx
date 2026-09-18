import { Box, Container, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import hero from "../assets/img/hero-2.png";
import Navbar from "./Navbar";
import { EASE_PREMIUM } from "../theme";

const HERO_FEATURES = [
  { icon: LocalShippingOutlinedIcon, label: "Transporte de cargas generales y frigoríficas" },
  { icon: AcUnitOutlinedIcon, label: "Cadena de frío" },
  { icon: VerifiedUserOutlinedIcon, label: "Seguridad en todo el recorrido" },
  { icon: LocationOnOutlinedIcon, label: "Cobertura nacional" },
  { icon: HandshakeOutlinedIcon, label: "Experiencia y confianza" },
];

export default function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "58vh", sm: "62vh", md: "90vh" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={hero}
          alt="Camión Scania de Transporte Agospau circulando por una ruta de montaña al atardecer"
          fetchPriority="high"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: { xs: "30% center", md: "center" },
            zIndex: 0,
            animation: `heroBackgroundZoom 20s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            willChange: "transform",
          }}
        />

      </Box>

      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "custom.white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ py: { xs: 0, md: 2.5 } }}>
            {HERO_FEATURES.map(({ icon: Icon, label }, idx) => {
              const isLast = idx === HERO_FEATURES.length - 1;
              return (
                <Grid
                  key={label}
                  size={{ xs: isLast ? 12 : 6, md: 2.4 }}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    textAlign: { xs: "center", md: "left" },
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: { xs: 0.75, md: 1.5 },
                    py: { xs: 2.5, md: 0 },
                    px: { xs: 1.5, md: 2.5 },
                    borderBottom: {
                      xs: !isLast ? "1px solid rgba(255,255,255,0.15)" : "none",
                      md: "none",
                    },
                    borderRight: {
                      xs: idx % 2 === 0 && !isLast ? "1px solid rgba(255,255,255,0.15)" : "none",
                      md: !isLast ? "1px solid rgba(255,255,255,0.25)" : "none",
                    },
                    transition: `transform 250ms ${EASE_PREMIUM}`,
                    "&:hover": {
                      transform: { md: "translateY(-4px)" },
                    },
                    "&:hover .hero-feature-icon": {
                      color: "secondary.main",
                      transform: "scale(1.12)",
                    },
                  }}
                >
                  <Icon
                    className="hero-feature-icon"
                    sx={{
                      fontSize: { xs: 26, md: 28 },
                      flexShrink: 0,
                      transition: `color 250ms ${EASE_PREMIUM}, transform 250ms ${EASE_PREMIUM}`,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.72rem", md: "0.8rem" },
                      fontWeight: 600,
                      lineHeight: 1.25,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {label.toUpperCase()}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

