import { Box, Card, CardContent, Container, Grid, IconButton, Typography } from "@mui/material";
import arrows from "../assets/img/arrow.png";
import img from "../assets/img/img.png";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { RevealOnScroll } from "./motion/RevealOnScroll";

export default function History() {
    const images = [img, img, img];


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
        <Box
            id={"history"}
            sx={{
                width: "100%",
                backgroundColor: "primary.main",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src={arrows}
                alt="arrows"
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: { xs: "100%", md: "45%" },
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                    },
                    zIndex: 0,
                }}
            />

            <RevealOnScroll>
                <Container maxWidth="lg">
                    <Grid container spacing={0} sx={{ position: "relative", zIndex: 1 }}>
                        <Grid size={{ xs: 12 }} sx={{ mt: "150px", mb: "75px" }}>
                            <Card sx={{ width: "100% ", borderRadius: 0 }}>
                                <CardContent sx={{ padding: "40px", paddingBottom: "40px !important" }}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <RevealOnScroll delayMs={80}>
                                                <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
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
                                                                <Box
                                                                    component="img"
                                                                    src={pair}
                                                                    alt={`slide-${idx}}`}
                                                                    sx={{
                                                                        width: "100%",
                                                                        px: 1,
                                                                        objectFit: "cover",
                                                                    }}
                                                                />
                                                            </Box>
                                                        ))}
                                                    </Box>

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
                                                            width: 40,
                                                            height: 40,
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            transition:
                                                                "background-color 200ms ease-out, transform 200ms ease-out",
                                                            "&:hover": {
                                                                backgroundColor: "secondary.light",
                                                                transform: "translateY(-50%) translateX(-2px)",
                                                            },
                                                        }}
                                                    >
                                                        <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)" }} />
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
                                                            width: 40,
                                                            height: 40,
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            transition:
                                                                "background-color 200ms ease-out, transform 200ms ease-out",
                                                            "&:hover": {
                                                                backgroundColor: "secondary.light",
                                                                transform: "translateY(-50%) translateX(2px)",
                                                            },
                                                        }}
                                                    >
                                                        <ArrowForwardIosIcon />
                                                    </IconButton>
                                                </Box>
                                            </RevealOnScroll>
                                        </Grid>
                                        <Grid
                                            size={{ xs: 12, md: 6 }}
                                            px={{ xs: 1, md: 10 }}
                                            mt={{ sm: 2, md: 0 }}
                                            display={"flex"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                        >
                                            <RevealOnScroll delayMs={120}>
                                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                                    Nuestra historia
                                                </Typography>
                                            </RevealOnScroll>
                                            <RevealOnScroll delayMs={180}>
                                                <Typography mb={3}>
                                                    Somos una especializada en el transporte de cargas refrigeradas y
                                                    congeladas con una logística atenta a las demandas de nuestros
                                                    clientes, organizada sobre la base de la satisfacción y la
                                                    confianza de quienes nos eligen.
                                                </Typography>
                                            </RevealOnScroll>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </RevealOnScroll>
        </Box>
    );
}

