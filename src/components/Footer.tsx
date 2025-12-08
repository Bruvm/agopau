import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import logoOne from "../assets/img/AGOSPAU-B.png";
import logoTwo from "../assets/img/AGOSPAUSA-B.png";
import arrows from '../assets/img/arrow.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const quickLinks = [
        {
            name: 'Nosotros',
            href: '#nosotros'
        },
        {
            name: 'Servicios',
            href: '#servicios'
        },
        {
            name: 'Destinos',
            href: '#destino'
        },
        {
            name: 'Nuestros Clientes',
            href: '#clientes'
        },
        {
            name: 'Preguntas frecuentes',
            href: '#preguntas'
        },
        {
            name: 'Contacto',
            href: '#contacto'
        }
    ]

    const contacts = [
        {
            icon: <LocalPhoneIcon />,
            text: '+54 353 4256029'
        },
        {
            icon: <LocalPhoneIcon />,
            text: '+54 353 4267149'
        },
        {
            icon: <EmailIcon />,
            text: 'logistica@agopausrl.com.ar'
        },
        {
            icon: <LocationOnIcon />,
            text: 'Bv. Sabattini Esq. Yapeyú, James Craik, Córdoba'
        },
    ]









    return (
        <Box
            sx={{
                backgroundColor: "primary.dark",
                width: "100%",
                backgroundImage: `url(${arrows})`,
                backgroundPosition: "top",
                position: "relative",
                overflow: "hidden",
                top: 0,
                color: "#FDF8E8",
                py: '50px'
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12 }}>

                    </Grid>
                </Grid>
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>


                        <Box
                            component="img"
                            src={logoOne}
                            alt="AgoPauSA"
                            sx={{ height: 50, marginRight: '8px' }}
                        />

                        <Box
                            component="img"
                            src={logoTwo}
                            alt="AgoPau"
                            sx={{ height: 50, marginRight: '8px' }}
                        />

                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 3 }}
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{ mt: { xs: 3, md: 0 } }}
                    >
                        <Typography
                            noWrap
                            sx={{
                                mb: 3,
                                fontWeight: 700,
                                color: "#FDF8E8",

                            }}
                        >
                            Enlaces rápidos
                        </Typography>
                        <List sx={{ listStyle: 'none', p: 0, m: 0, fontSize: '14px' }}>
                            {quickLinks.map((item) => (
                                <ListItem key={item.name} disablePadding>
                                    <Box
                                        component="a"
                                        href={item.href}
                                        sx={{
                                            textDecoration: 'none',
                                            color: '#F5F5F5',
                                            fontSize: '0.95rem',
                                            marginBottom: '5px',
                                            fontWeight: '14px',
                                            '&:hover': { color: 'secondary.main', textDecoration: 'none' },
                                        }}
                                    >
                                        {item.name}
                                    </Box>
                                </ListItem>
                            ))}
                        </List>


                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 3 }}
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{ mt: { xs: 3, md: 0 } }}
                    >
                        <Typography
                            noWrap
                            sx={{
                                mb: 3,
                                fontWeight: 700,
                                color: "#FDF8E8",

                            }}
                        >
                            Contactos
                        </Typography>
                        <List sx={{ listStyle: 'none', p: 0, m: 0, fontSize: '14px' }}>
                            {contacts.map((item, i) => (
                                <ListItem key={i} disablePadding>
                                    <ListItemIcon sx={{ color: "#F5F5F5", minWidth: "36px", alignItems: 'flex-start' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{
                                            textDecoration: 'none',
                                            color: '#F5F5F5',
                                            fontSize: '0.95rem',
                                            marginBottom: '5px',
                                        }}
                                    >
                                        {item.text}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
