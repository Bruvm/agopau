import { Box, Container, Grid, Typography } from "@mui/material";
import arcor from "../assets/img/clientes/arcor.png";
import bimbo from "../assets/img/clientes/bimbo.png";
import donemilio from "../assets/img/clientes/donemilio.png";
import elcor from "../assets/img/clientes/elcor.png";
import expoverde from "../assets/img/clientes/expoverde.png";
import friar from "../assets/img/clientes/friar.png";
import grido from "../assets/img/clientes/grido.png";
import icecream from "../assets/img/clientes/icecream.png";
import lablanca from "../assets/img/clientes/lablanca.png";
import loginter from "../assets/img/clientes/loginter.png";
import marolio from "../assets/img/clientes/marolio.png";
import mbrf from "../assets/img/clientes/mbrf.png";
import noalsa from "../assets/img/clientes/noalsa.png";
import palmesano from "../assets/img/clientes/palmesano.png";
import puntadelagua from "../assets/img/clientes/puntadelagua.png";
import quento from "../assets/img/clientes/quento.png";
import saputo from "../assets/img/clientes/saputo.png";
import sobreroycagnolo from "../assets/img/clientes/sobreroycagnolo.png";
import soychu from "../assets/img/clientes/soychu.png";
import { RevealOnScroll } from "./motion/RevealOnScroll";

const CLIENT_LOGOS = [
  { src: arcor, alt: "Arcor" },
  { src: bimbo, alt: "Bimbo" },
  { src: donemilio, alt: "Don Emilio" },
  { src: elcor, alt: "El Cor" },
  { src: expoverde, alt: "Expo Verde" },
  { src: friar, alt: "Friar" },
  { src: grido, alt: "Grido" },
  { src: icecream, alt: "Ice Cream" },
  { src: lablanca, alt: "La Blanca" },
  { src: loginter, alt: "Loginter" },
  { src: marolio, alt: "Marolio" },
  { src: mbrf, alt: "MBRF" },
  { src: noalsa, alt: "Noal S.A." },
  { src: palmesano, alt: "Palmesano" },
  { src: puntadelagua, alt: "Punta del Agua" },
  { src: quento, alt: "Quento" },
  { src: saputo, alt: "Saputo" },
  { src: sobreroycagnolo, alt: "Sobrero y Cagnolo" },
  { src: soychu, alt: "Soychu" },
];

export default function Clients() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#EBF8FF",
        pb: "120px",
        pt: { xs: "120px" },
      }}
      id="clients"
    >
      <Container maxWidth="lg">
        <RevealOnScroll>
          <Typography
            variant="body1"
            sx={{
              color: "#5B5653",
              textAlign: "center",
              mb: { xs: 5, md: 5 },
              fontSize: { xs: "1.25rem", sm: "1.25rem" },
            }}
          >
            Confían en nosotros
          </Typography>
        </RevealOnScroll>

        <Grid container justifyContent="center" alignItems="center">
          {CLIENT_LOGOS.map(({ src, alt }, idx) => (
            <Grid
              key={alt}
              size={{ xs: 6, sm: 4, md: 2 }}
              display="flex"
              justifyContent="center"
              sx={{ mb: { xs: 3, md: 4 } }}
            >
              <RevealOnScroll delayMs={80 + idx * 60}>
                <Box
                  component="img"
                  src={src}
                  alt={alt}
                  loading="lazy"
                  sx={{
                    height: 70,
                    width: "auto",
                    maxWidth: 120,
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    transition:
                      "filter 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "translateY(-2px) scale(1.05)",
                    },
                  }}
                />
              </RevealOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}