import { Box, Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import ml from "../assets/img/ml.png";
import grido from "../assets/img/grido.png";
import { RevealOnScroll } from "./motion/RevealOnScroll";

export default function Clients() {

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#EBF8FF",
                pb: "120px",
                pt: { xs: "120px" },
            }}
            id={"clients"}
        >
            <RevealOnScroll>
                <Container maxWidth="lg">
                    <Grid container spacing={0} justifyContent="center">
                        <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                            <Typography
                                variant="body1"
                                sx={{ color: "#5B5653", mb: { xs: 5, md: 5 } }}
                            >
                                Confian en nosotros
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems={"center"}
                    >
                        {[ml, grido, ml, grido, ml, grido].map((logo, idx) => (
                            <Grid
                                key={idx}
                                size={{ xs: 6, sm: 4, md: 2 }}
                                display="flex"
                                justifyContent="center"
                                sx={{
                                    mb: { xs: 3, md: 0 },
                                }}
                            >
                                <RevealOnScroll delayMs={80 + idx * 60}>
                                    <Box
                                        component="img"
                                        src={logo}
                                        alt="Cliente"
                                        sx={{
                                            height: 70,
                                            filter: "grayscale(100%)",
                                            transition:
                                                "filter 0.3s ease, transform 0.2s ease",
                                            "&:hover": {
                                                filter: "grayscale(0%)",
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    />
                                </RevealOnScroll>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </RevealOnScroll>
        </Box>
    );
}