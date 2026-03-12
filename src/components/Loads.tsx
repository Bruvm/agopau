
import { Box, Container, Grid, Typography } from "@mui/material";
import transportOne from '../assets/img/T8.jpg'
import transportTwo from '../assets/img/T6.jpg'
import transportThree from '../assets/img/T3.jpg'
import transportFour from '../assets/img/T2.jpg'
import { RevealOnScroll } from "./motion/RevealOnScroll";


export default function Loads() {

    return (
        <RevealOnScroll id={"services"}>
            <Container sx={{ position: "relative", my: "150px" }}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={3}
                >
                    <Grid size={{ xs: 12 }} pr={1} sx={{ textAlign: "center" }}>
                        <RevealOnScroll delayMs={40}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom mb={2}>
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
                    {[transportOne, transportTwo, transportThree, transportFour].map(
                        (src, idx) => (
                            <Grid
                                key={idx}
                                size={
                                    idx === 0 || idx === 3
                                        ? { xs: 12, sm: 6, md: 4 }
                                        : { xs: 12, sm: 6, md: 8 }
                                }
                            >
                                <RevealOnScroll delayMs={80 + idx * 80}>
                                    <Box
                                        sx={{
                                            height: 300,
                                            width: "100%",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={src}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                transition:
                                                    "transform 0.4s ease, filter 0.4s ease",
                                                filter: "brightness(0.96)",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    filter: "brightness(1)",
                                                },
                                            }}
                                        />
                                    </Box>
                                </RevealOnScroll>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </RevealOnScroll>
    );
}
