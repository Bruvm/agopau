import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import logo from "../assets/img/AGOSPAU.png";

const pages = [
    { label: "Inicio", href: "#" },
    { label: "Recursos", href: "#technology" },
    { label: "Sobre nosotros", href: "#about" },
    { label: "Producto", href: "#product" },
    { label: "Contacto", href: "#contact" }
];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "background.paper",
                color: "text.primary"
            }}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* LOGO desktop */}
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{ height: 25, mr: 1 }}
                        />
                    </Box>

                    {/* ÍTEMS desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                href={page.href}
                                disableRipple
                                sx={{
                                    color: "text.primary",
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "transparent" },
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Menú mobile */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu de navegación"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu} component="a" href={page.href}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}
