import React, { useRef, useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Box,
    Container,
    Grid,
    Snackbar,
    Alert,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";
import { RevealOnScroll } from "./motion/RevealOnScroll";
import { EASE_PREMIUM } from "../theme";

const SERVICE_ID = "service_km6xzs1";
const TEMPLATE_ID = "template_uavffls";
const PUBLIC_KEY = "XBUfeh_WPdM0TFIhx";

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const form = useRef<HTMLFormElement | null>(null);
    const [, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setSending(true);
        try {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                    setSent(true);
                    setSending(false);
                    form.current?.reset();
                    setOpen(true);
                })
                .catch((err) => {
                    console.error("EmailJS error:", err);
                    setSending(false);
                    setError(true);
                    setOpen(true);
                });
        } catch (error) {
            console.error("Error enviando el email:", error);
            setSending(false);
            setError(true);
            setOpen(true);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                pt: "100px",
                pb: "100px",
            }}
            id="contact"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <RevealOnScroll>
                            <Grid container>
                                <Grid size={{ xs: 12 }}>
                                    <Box display="flex" justifyContent="left">
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: "text.primary",
                                                textAlign: "left",
                                                fontSize: {
                                                    xs: "2rem",
                                                    sm: "2rem",
                                                    md: "2.5rem",
                                                },
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            ¿Querés cotizar o
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="left">
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: "text.primary",
                                                textAlign: "left",
                                                fontSize: {
                                                    xs: "2rem",
                                                    sm: "2rem",
                                                    md: "2.5rem",
                                                },
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            tenés dudas?
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12 }} mt={2}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: {
                                                xs: "0.9rem",
                                                sm: "1rem",
                                                md: "1.1rem",
                                            },
                                        }}
                                    >
                                        Estamos para ayudarte, escribinos y uno de nuestros
                                        asesores te responderá a la brevedad.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </RevealOnScroll>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <RevealOnScroll delayMs={80}>
                            <form ref={form} onSubmit={sendEmail}>
                                <RevealOnScroll delayMs={100}>
                                    <TextField
                                        fullWidth
                                        name="from_name"
                                        label="Nombre"
                                        placeholder="Tu nombre"
                                        margin="normal"
                                        required
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                transition: `box-shadow 200ms ${EASE_PREMIUM}, border-color 200ms ${EASE_PREMIUM}`,
                                                "&.Mui-focused": {
                                                    boxShadow: "0 0 0 2px rgba(30, 47, 110, 0.12)",
                                                },
                                            },
                                        }}
                                    />
                                </RevealOnScroll>

                                <RevealOnScroll delayMs={180}>
                                    <TextField
                                        fullWidth
                                        name="reply_to"
                                        label="Email"
                                        placeholder="Ingrese un email de contacto"
                                        margin="normal"
                                        required
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                transition: `box-shadow 200ms ${EASE_PREMIUM}, border-color 200ms ${EASE_PREMIUM}`,
                                                "&.Mui-focused": {
                                                    boxShadow: "0 0 0 2px rgba(30, 47, 110, 0.12)",
                                                },
                                            },
                                        }}
                                    />
                                </RevealOnScroll>

                                <RevealOnScroll delayMs={260}>
                                    <TextField
                                        fullWidth
                                        name="company"
                                        label="Empresa"
                                        placeholder="Ingrese el nombre de tu empresa"
                                        margin="normal"
                                        required
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                transition: `box-shadow 200ms ${EASE_PREMIUM}, border-color 200ms ${EASE_PREMIUM}`,
                                                "&.Mui-focused": {
                                                    boxShadow: "0 0 0 2px rgba(30, 47, 110, 0.12)",
                                                },
                                            },
                                        }}
                                    />
                                </RevealOnScroll>

                                <RevealOnScroll delayMs={340}>
                                    <TextField
                                        fullWidth
                                        name="message"
                                        label="Mensaje"
                                        placeholder="Contanos como podemos ayudarte"
                                        margin="normal"
                                        multiline
                                        rows={5}
                                        required
                                        size="small"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                transition: `box-shadow 200ms ${EASE_PREMIUM}, border-color 200ms ${EASE_PREMIUM}`,
                                                "&.Mui-focused": {
                                                    boxShadow: "0 0 0 2px rgba(30, 47, 110, 0.12)",
                                                },
                                            },
                                        }}
                                    />
                                </RevealOnScroll>

                                <RevealOnScroll delayMs={420}>
                                    <Box display={"flex"} justifyContent={"flex-end"}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            disabled={sending}
                                            size={isMobile ? "small" : "medium"}
                                            endIcon={<SendIcon />}
                                            sx={{
                                                mt: 2,
                                                py: 1,
                                                px: 3,
                                                backgroundColor: "secondary.light",
                                                borderRadius: "0px",
                                                transition: `background-color 200ms ${EASE_PREMIUM}, transform 200ms ${EASE_PREMIUM}, box-shadow 200ms ${EASE_PREMIUM}`,
                                                "&:hover": {
                                                    backgroundColor: "secondary.main",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0px 10px 20px rgba(0,0,0,0.18)",
                                                },
                                                "&:active": {
                                                    transform: "scale(0.98)",
                                                },
                                                "& .MuiButton-endIcon": {
                                                    transition: `transform 200ms ${EASE_PREMIUM}`,
                                                },
                                                "&:hover .MuiButton-endIcon": {
                                                    transform: "translateX(3px)",
                                                },
                                            }}
                                        >
                                            {sending ? "Enviando..." : "Enviar"}
                                        </Button>
                                    </Box>
                                </RevealOnScroll>
                            </form>
                        </RevealOnScroll>

                        <Snackbar
                            open={open}
                            autoHideDuration={4000}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                        >
                            <Alert
                                onClose={() => setOpen(false)}
                                severity={error ? "error" : "success"}
                                sx={{ width: "100%" }}
                            >
                                {error
                                    ? "Ocurrió un error al enviar el mensaje. Intentalo de nuevo."
                                    : "Tu mensaje se envió con éxito. Te responderemos pronto."}
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
