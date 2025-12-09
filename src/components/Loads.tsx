
import {
    Box,
    Container,
    Grid,
    Typography,

} from "@mui/material";
import transportOne from '../assets/img/t7.jpg'
import transportTwo from '../assets/img/T6.jpg'
import transportThree from '../assets/img/T3.jpg'
import transportFour from '../assets/img/T2.jpg'


export default function Loads() {

    return (
        <Container sx={{ position: "relative", my: '150px' }} id={'services'}>
            <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
            >
                <Grid size={{ xs: 12 }} pr={1} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom mb={2}>
                        Tipo de cargas
                    </Typography>
                    <Typography>
                        Más de 50 unidades con monitoreo de temperatura controlada, transportan cargas refrigeradas, congeladas y secas.
                    </Typography>
                    <Typography>
                        Nuestra empresa cumple con las normas acordes a las cargas que transporta y cuenta con los permisos y licencias al día, para brindar el mejor servicio.
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={2}
                mt={4}
            >
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        sx={{
                            height: 300,
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={transportOne}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease", 
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box
                        sx={{
                            height: 300,
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={transportTwo}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box
                        sx={{
                            height: 300,
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={transportThree}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        sx={{
                            height: 300,
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={transportFour}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>



        </Container>
    );
}
