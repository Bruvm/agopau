import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import bitrenVideo from "../assets/img/trucks/truck-15.mov";
import { RevealOnScroll } from "./motion/RevealOnScroll";


export default function BitrenShowcase() {
  return (
    <Container id={"bitren"} maxWidth="lg" sx={{ scrollMarginTop: 80, mb: "150px" }}>
      <RevealOnScroll delayMs={40}>
        <Grid container spacing={0} sx={{ position: "relative", zIndex: 1 }}>
          <Grid size={{ xs: 12 }} sx={{ mt: "0px", mb: "50px" }}>
            <Card sx={{ width: "100%", backgroundColor: "#DBEAFE", position: "relative" }}>
              <CardContent>
                <Grid container spacing={3}>

                  <Grid
                    size={{ xs: 12, md: 4 }}
                    mt={{ xs: 3, md: 0 }}
                    sx={{ order: { xs: 1, md: -1 } }}
                  >
                    <Box sx={{ backgroundColor: "#DBEAFE", position: { xs: "relative", md: "absolute" }, top: { md: "50%" }, left: { md: 50 }, transform: { md: "translateY(-50%)" }, p: { xs: 2, md: 4 }, width: { xs: "100%", md: "40%" }, zIndex: 99 }} >


                      <RevealOnScroll delayMs={150}>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          gutterBottom
                          sx={{ letterSpacing: "-0.02em"}}
                        >
                          Bitren de última generación
                        </Typography>
                      </RevealOnScroll>
                      <RevealOnScroll delayMs={220}>
                        <Typography mb={3}>
                          Contamos con una unidad Bitren de última generación que nos permite transportar mayores volúmenes de carga de manera segura y eficiente.
                          <br></br>
                          Gracias a su mayor capacidad, optimizamos los tiempos de traslado y ofrecemos un servicio más competitivo para nuestros clientes. Además, tiene un menor impacto ambiental y tecnología de avanzada en seguridad vial.
                        </Typography>
                      </RevealOnScroll>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 8 }}>
                    <RevealOnScroll delayMs={60}>
                      <Box
                        component="video"
                        src={bitrenVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{
                          width: "100%",
                          height: { xs: 300, sm: 400, lg: 560 },
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </RevealOnScroll>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </RevealOnScroll>
    </Container>
  );
}
