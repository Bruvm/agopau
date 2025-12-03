import { Box, Button, Card, CardContent, Container, Grid, IconButton, Typography } from "@mui/material";
import arrows from '../assets/img/arrow.png'
import img from '../assets/img/img.png'
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Map from "./Map";

export default function History() {
    const images = [
        [img],
        [img],
        [img],
    ];

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
            sx={{
                width: "100%",
                backgroundColor: 'primary.main',
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box>
               
                <Container maxWidth="lg">
                    <Grid container spacing={0} sx={{position: 'relative', zIndex: 1}}>
                        <Grid size={{ xs: 12 }} sx={{ mt: '150px', mb: '75px' }}>
                            <Card sx={{ width: '100% ', borderRadius: 0}}>
                                <CardContent sx={{padding: '40px', paddingBottom: '40px !important'}}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 6 }}>
                                            <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
                                                {/* Carrusel */}
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        transition: "transform 0.5s ease",
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

                                                {/* Botón Anterior */}
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
                                                        "&:hover": { backgroundColor: "secondary.light" },
                                                    }}
                                                >
                                                    <ArrowForwardIosIcon sx={{transform: 'rotate(180deg)'}}/>
                                                </IconButton>

                                                {/* Botón Siguiente */}
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
                                                        "&:hover": { backgroundColor: "secondary.light" },
                                                    }}
                                                >
                                                    <ArrowForwardIosIcon/>
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6 }} px={10} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                                Nuestra historia
                                            </Typography>
                                            <Typography mb={3}>
                                                Somos una especializada en el transporte de cargas refrigeradas y
                                                congeladas con una logística atenta a las demandas de nuestros clientes,
                                                organizada sobre la base de la satisfacción y la confianza de quienes nos eligen.
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

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
                        md: "block"
                    },
                    zIndex: 0
                }}
            />
        </Box>

    );
}

