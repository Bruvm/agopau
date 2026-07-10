import { Box, Container, Grid } from "@mui/material";
import truckVideo from "../assets/img/trucks/truck-18.mp4";
import arrowWhite from "../assets/img/arrow-grey.png";
import { RevealOnScroll } from "./motion/RevealOnScroll";

export default function FleetShowcase() {
  return (
    <RevealOnScroll id={"fleet"} sx={{ scrollMarginTop: 80, pb: "150px", }}>
      <Box
        sx={{
          backgroundImage: `url(${arrowWhite})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      >
        <Container>
          <Grid container justifyContent="flex-start">
            <Grid size={{ xs: 12, md: 5 }} pl={{ xs: 0, md: 4 }}>
              <Box
                component="video"
                src={truckVideo}
                autoPlay
                muted
                loop
                playsInline
                sx={{
                  width: "100%",
                  height: { xs: 280, sm: 400, md: 400, lg: 500 },
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 0,
                  boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </RevealOnScroll>
  );
}
