import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from '../assets/img/img.png'
const images = [
  [img, img],
  [img, img],
  [img, img],
];

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Container sx={{ position: "relative", py: '150px' }} id='about'>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        spacing={3}
      >
        <Grid size={{ xs: 12, md: 4 }} pr={1}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Sobre nosotros
          </Typography>
          <Typography mb={3}>
            En el año 2003 surge nuestra empresa familiar con el
            nombre de <strong>AGO-PAU S R.L.</strong>, abreviatura de
            los nombres de nuestras hijas, Agostina y Paula.
          </Typography>
          <Typography>
            En 22 años hemos trabajado incansablemente para brindar
            nuestros servicios con honestidad y responsabilidad.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${activeIndex * 100}%)`,
                height: '300px',
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
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
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
          "&:hover": { backgroundColor: "secondary.light" }
        }}
      >
        <ArrowForwardIosIcon sx={{ transform: 'rotate(180deg)' }} fontSize="small" />
      </IconButton>


      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
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
          "&:hover": { backgroundColor: "secondary.light" }
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

    </Container>
  );
}
