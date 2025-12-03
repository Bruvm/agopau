import { Box, Button, Card, CardContent, Container, Grid, IconButton, Typography } from "@mui/material";
import arrows from '../assets/img/arrow.png'
import img from '../assets/img/img.png'
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Map from "./Map";
import theme from "../theme";

export default function PLaces() {
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
                 background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0% 50%, ${theme.palette.background.default} 50% 100%)`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box>
               
                <Container maxWidth="lg">
                    <Grid container spacing={0} sx={{position: 'relative', zIndex: 1}}>
                        <Grid size={{ xs: 12 }} sx={{ mt: '150px', mb: '50px' }}>
                            <Card sx={{ width: '100% ', backgroundColor: '#AAD3DF' }}>
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 8 }}>
                                            <Map/>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 4}} display={'flex'} alignItems={'flex-end'}>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                                 Llegamos a todas las provincias de nuestro país, 
                                                 desde la Quiaca a Ushuaia y a nuestros vecinos Chile y Brasil. 
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
                    bottom: "50%",
                    left: 0,
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

