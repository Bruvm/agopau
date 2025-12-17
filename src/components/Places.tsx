import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import arrows from '../assets/img/arrow.png'
import Map from "./Map";
import theme from "../theme";

export default function PLaces() {
    return (
        <Box
            id='places'
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
                                        <Grid size={{ xs: 12, md: 8 }}>
                                            <Map/>
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 4}} mt={{ xs: 3, md: 0}} display={'flex'} alignItems={'flex-end'}>
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

