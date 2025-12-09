import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import hero from '../assets/img/hero.jpg'
import arrows from '../assets/img/arrows.png'
import Navbar from "./Navbar";

export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >

            <Box
                sx={{
                    width: { xs: "100%", md: "33.333%" },
                    height: "100%",
                    backgroundColor: "primary.main",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: { xs: 3, md: 6 },
                    color: "white",
                    zIndex: 2,
                }}
            />
            <Box
                component="img"
                src={arrows}
                alt="arrows"
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: { xs: "100%", md: "33.333%" },
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    },
                    zIndex: 10
                }}
            />

            <Box sx={{ position: "absolute", zIndex: 99, top: 0, left: 0, width: "100%" }}>
                <Navbar />
                <Container
                    maxWidth="lg"
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        p: 0,
                        pt: '100px'
                    }}
                >
                    <Grid container spacing={0} sx={{ mb: '50px' }}>
                        <Grid size={{ xs: 12 }}>
                            <Box mb={'10px'}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 700,
                                        color: "custom.white",
                                        fontSize: {
                                            xs: "2rem",  
                                            sm: "2.5rem",
                                            md: "3rem", 
                                            lg: "3.5rem"
                                        },
                                        lineHeight: 1.1
                                    }}
                                >
                                    Tu carga, en
                                </Typography>
                            </Box>
                            <Box mb={'10px'}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 700,
                                        color: "custom.white",
                                        fontSize: {
                                            xs: "2rem", 
                                            sm: "2.5rem",
                                            md: "3rem",
                                            lg: "3.5rem"
                                        },
                                        lineHeight: 1.1
                                    }}
                                >
                                    manos seguras y
                                </Typography>
                            </Box>
                            <Box mb={'10px'}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 700,
                                        color: "custom.white",
                                        fontSize: {
                                            xs: "2rem",
                                            sm: "2.5rem",
                                            md: "3rem",
                                            lg: "3.5rem"
                                        },
                                        lineHeight: 1.1
                                    }}
                                >
                                    expertas
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12 }} mt={'25px'}>
                            <Button
                                variant="contained"
                                size={isMobile ? "small" : "medium"}
                                href="#services"
                                sx={{ py: 1, px: 3, backgroundColor: 'secondary.main', borderRadius: 0, "&:hover": { backgroundColor: "secondary.light" } }}
                                endIcon={<KeyboardArrowRightIcon />}
                            >
                                Nuestras cargas
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </Box>

    );
}

