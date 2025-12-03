
import {
    Box,
    Container,
    Grid,
    Typography,

} from "@mui/material";
import img from '../assets/img/img.png'

export default function Loads() {

    return (
        <Container sx={{ position: "relative", my: '150px' }}>
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
                        component="img"
                        src={img}
                        sx={{
                            height: '300px',
                            width: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box
                        component="img"
                        src={img}
                        sx={{
                            height: '300px',
                            width: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box
                        component="img"
                        src={img}
                        sx={{
                            height: '300px',
                            width: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        component="img"
                        src={img}
                        sx={{
                            height: '300px',
                            width: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </Grid>
            </Grid>



        </Container>
    );
}
