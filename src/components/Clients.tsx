import { Box, Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ml from '../assets/img/ml.png'
import grido from '../assets/img/grido.png'

export default function Clients() {

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#EBF8FF",
                pb: '120px',
                pt: { xs: '120px' }
            }}
            id={'clients'}
        >
            <Container maxWidth="lg">
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <Typography variant="body1" sx={{ color: '#5B5653', mb: { xs: 5, md: 5 } }}>
                            Confian en nosotros
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems={'center'}
                >
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={ml}
                            alt="Mercado Libre"
                            sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />

                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={grido}
                            alt="Grido"
                             sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={ml}
                            alt="Mercado Libre"
                             sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={grido}
                            alt="Grido"
                             sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={ml}
                            alt="Mercado Libre"
                             sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4, md: 2 }}
                        display="flex"
                        justifyContent="center"
                        sx={{
                            mb: { xs: 3, md: 0 }
                        }}>
                        <Box
                            component="img"
                            src={grido}
                            alt="Grido"
                             sx={{
                                height: 70,
                                filter: "grayscale(100%)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

