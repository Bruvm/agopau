import { useState, useEffect, useCallback } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import truck1 from '../assets/img/trucks/truck-1.jpeg'
import truck4 from '../assets/img/trucks/truck-4.jpeg'
import truck5 from '../assets/img/trucks/truck-5.jpeg'
import truck8 from '../assets/img/trucks/truck-8.jpeg'
import truck10 from '../assets/img/trucks/truck-10.jpg'
import truck11 from '../assets/img/trucks/truck-11.jpg'
import truck12 from '../assets/img/trucks/truck-12.jpg'
import truck13 from '../assets/img/trucks/truck-13.jpg'
import { RevealOnScroll } from "./motion/RevealOnScroll";
import { EASE_PREMIUM } from "../theme";

const IMAGES = [
  truck5, truck10, truck11, truck13,
  truck4, truck8, truck1, truck12,
];

const GROUPS = [
  IMAGES.slice(0, 4),
  IMAGES.slice(4, 8),
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export default function Loads() {
  const [groupIndex, setGroupIndex] = useState(0);

  const nextGroup = useCallback(() => {
    setGroupIndex((prev) => (prev + 1) % GROUPS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextGroup, 8000);
    return () => clearInterval(interval);
  }, [nextGroup]);

  const currentGroup = GROUPS[groupIndex];

  return (
    <RevealOnScroll id={"services"} sx={{ scrollMarginTop: 80 }}>
      <Container sx={{ position: "relative", my: "150px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={3}
        >
          <Grid size={{ xs: 12 }} pr={1} sx={{ textAlign: "center" }}>
            <RevealOnScroll delayMs={40}>
              <Typography variant="h5" fontWeight="bold" gutterBottom mb={2} sx={{ letterSpacing: "-0.02em" }}>
                Tipo de cargas
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={100}>
              <Typography>
                Más de 50 unidades con monitoreo de temperatura controlada,
                transportan cargas refrigeradas, congeladas y secas.
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={160}>
              <Typography>
                Nuestra empresa cumple con las normas acordes a las cargas que
                transporta y cuenta con los permisos y licencias al día, para
                brindar el mejor servicio.
              </Typography>
            </RevealOnScroll>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          mt={4}
        >
          {currentGroup.map((src, idx) => (
            <Grid
              key={src}
              size={
                idx === 0 || idx === 3
                  ? { xs: 12, sm: 6, md: 4 }
                  : { xs: 12, sm: 6, md: 8 }
              }
            >
              <Box
                sx={{
                  position: "relative",
                  height: 300,
                  width: "100%",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .loads-overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: `transform 0.5s ${EASE_PREMIUM}, filter 0.5s ${EASE_PREMIUM}`,
                    filter: "brightness(0.96)",
                    animation: `${fadeIn} 0.5s ease ${idx * 80}ms both`,
                    "&:hover": {
                      transform: "scale(1.05)",
                      filter: "brightness(1)",
                    },
                  }}
                />
                <Box
                  className="loads-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(30,47,110,0.3), transparent)",
                    opacity: 0,
                    transition: `opacity 0.4s ${EASE_PREMIUM}`,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RevealOnScroll>
  );
}
