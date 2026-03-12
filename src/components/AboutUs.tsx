import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from "../assets/img/img.png";
import { RevealOnScroll } from "./motion/RevealOnScroll";

const images = [
  [img, img],
  [img, img],
  [img, img],
];

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <RevealOnScroll id="about">
      <Container sx={{ position: "relative", py: "150px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={3}
        >
          <Grid size={{ xs: 12, md: 4 }} pr={1} mb={{ sm: 2, md: 0 }}>
            <RevealOnScroll delayMs={50}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sobre nosotros
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={120}>
              <Typography mb={3}>
                En el año 2003 surge nuestra empresa familiar con el nombre de{" "}
                <strong>AGO-PAU S R.L.</strong>, abreviatura de los nombres de
                nuestras hijas, Agostina y Paula.
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={180}>
              <Typography>
                En 22 años hemos trabajado incansablemente para brindar nuestros
                servicios con honestidad y responsabilidad.
              </Typography>
            </RevealOnScroll>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <RevealOnScroll delayMs={120}>
              <Box sx={{ overflow: "hidden" }}>
                <Box
                  sx={{
                    display: "flex",
                    transition:
                      "transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                    transform: `translateX(-${activeIndex * 100}%)`,
                    height: "300px",
                  }}
                >
                  {images.map((pair, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        flex: "0 0 100%",
                        justifyContent: "center",
                      }}
                    >
                      {pair.map((src, i) => (
                        <Box
                          component="img"
                          key={i}
                          src={src}
                          alt={`slide-${idx}-${i}`}
                          sx={{
                            width: "50%",
                            px: 1,
                            objectFit: "cover",
                            transition:
                              "transform 400ms ease-out, box-shadow 400ms ease-out",
                            transform:
                              idx === activeIndex ? "scale(1.02)" : "scale(1)",
                            boxShadow:
                              idx === activeIndex
                                ? "0 12px 24px rgba(0,0,0,0.18)"
                                : "none",
                          }}
                        />
                      ))}
                    </Box>
                  ))}
                </Box>
              </Box>
            </RevealOnScroll>
          </Grid>
        </Grid>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: {
              xs: "65%",
              md: "50%",
            },
            left: 0,
            transform: "translateY(-50%)",
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: 0,
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "background-color 200ms ease-out, transform 200ms ease-out",
            "&:hover": {
              backgroundColor: "secondary.light",
              transform: "translateY(-50%) translateX(-2px)",
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{ transform: "rotate(180deg)" }}
            fontSize="small"
          />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: {
              xs: "65%",
              md: "50%",
            },
            right: 0,
            transform: "translateY(-50%)",
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: 0,
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "background-color 200ms ease-out, transform 200ms ease-out",
            "&:hover": {
              backgroundColor: "secondary.light",
              transform: "translateY(-50%) translateX(2px)",
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Container>
    </RevealOnScroll>
  );
}
