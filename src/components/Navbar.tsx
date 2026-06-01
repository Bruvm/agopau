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
import logoOne from "../assets/img/AGOSPAU.png";
import logoTwo from "../assets/img/AGOSPAUSA.png";
import { EASE_PREMIUM } from "../theme";

const pages = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#services" },
  { label: "Destinos", href: "#places" },
  { label: "Nuestros Clientes", href: "#clients" },
  { label: "Contacto", href: "#contact" }
];

const subNosotros = [
  { label: "Nuestra Empresa", href: "#about" },
  { label: "Historia", href: "#history" }
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const [anchorElNosotros, setAnchorElNosotros] =
    React.useState<null | HTMLElement>(null);

  const [activeSection, setActiveSection] = React.useState("/");

  const [scrolled, setScrolled] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenNosotros = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNosotros(event.currentTarget);
  };

  const handleCloseNosotros = () => setAnchorElNosotros(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const sectionIds = [
      ...pages.map((p) => p.href.replace("#", "")),
      ...subNosotros.map((s) => s.href.replace("#", ""))
    ];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? "rgba(229, 233, 244, 0.85)"
          : "rgba(229, 233, 244, 1)",
        backdropFilter: "blur(12px)",
        color: "text.primary",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid rgba(0,0,0,0.04)",
        boxShadow: scrolled
          ? "0 1px 3px rgba(0,0,0,0.06)"
          : "none",
        transition: `background-color 300ms ${EASE_PREMIUM}, border-bottom 300ms ${EASE_PREMIUM}, box-shadow 300ms ${EASE_PREMIUM}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {/* LOGO desktop */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <Box component="img" src={logoOne} sx={{ height: 25, mr: 1 }} />
            <Box component="img" src={logoTwo} sx={{ height: 25 }} />
          </Box>

          {/* ITEMS desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {/* MENÚ DESPLEGABLE NOSOTROS */}
            <Box>
              <Button
                onClick={handleOpenNosotros}
                disableRipple
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "none",
                  fontWeight:
                    activeSection === "nosotros" ||
                      subNosotros.some(s => s.href.replace("#", "") === activeSection)
                      ? 700
                      : 600,
                  color:
                    activeSection === "nosotros" ||
                      subNosotros.some(s => s.href.replace("#", "") === activeSection)
                      ? "primary.main"
                      : "text.primary",
                  position: "relative",
                  textDecoration: "none",
                  transition: `all 300ms ${EASE_PREMIUM}`,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                    transform: "translateY(-2px)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    zIndex: -1,
                    bottom: "-1px",
                    left: 0,
                    right: 0,
                    height: "5px",
                    backgroundColor: "primary.main",
                    transform:
                      activeSection === "nosotros" ||
                      subNosotros.some(s => s.href.replace("#", "") === activeSection)
                        ? "scaleY(1)"
                        : "scaleY(0)",
                    transformOrigin: "bottom",
                    transition: `transform 300ms ${EASE_PREMIUM}`,
                  },
                  "&:hover::before": {
                    transform: "scaleY(1)",
                  },
                }}
              >
                Nosotros
              </Button>

              <Menu
                anchorEl={anchorElNosotros}
                open={Boolean(anchorElNosotros)}
                onClose={handleCloseNosotros}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {subNosotros.map((item) => (
                  <MenuItem
                    key={item.href}
                    component="a"
                    href={item.href}
                    onClick={handleCloseNosotros}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* RESTO DE LOS ITEMS */}
            {pages
              .filter((p) => p.label !== "Nosotros")
              .map((page) => {
                const pageId = page.href.replace("#", "");
                const isActive = activeSection === pageId;

                return (
                  <Button
                    key={page.label}
                    href={page.href}
                    disableRipple
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      textTransform: "none",
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "primary.main" : "text.primary",
                      position: "relative",
                      textDecoration: "none",
                      transition: `all 300ms ${EASE_PREMIUM}`,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        zIndex: -1,
                        bottom: "-1px",
                        left: 0,
                        right: 0,
                        height: "5px",
                        backgroundColor: "primary.main",
                        transform: isActive ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "bottom",
                        transition: `transform 300ms ${EASE_PREMIUM}`,
                      },
                      "&:hover::before": {
                        transform: "scaleY(1)",
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                );
              })}
          </Box>

          {/* MOBILE MENU */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* LOGOS IZQUIERDA */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="img" src={logoOne} sx={{ height: 26 }} />
                <Box component="img" src={logoTwo} sx={{ height: 26 }} />
              </Box>

              {/* MENU DERECHA */}
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>

              {/* MENU */}
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <Typography fontWeight={500}>Nosotros</Typography>
                </MenuItem>

                {/* SUB ITEMS */}
                {subNosotros.map((item) => (
                  <MenuItem
                    key={item.href}
                    component="a"
                    href={item.href}
                    onClick={handleCloseNavMenu}
                    sx={{ pl: 4 }}
                  >
                    {item.label}
                  </MenuItem>
                ))}

                {/* RESTO */}
                {pages
                  .filter((p) => p.label !== "Nosotros")
                  .map((page) => (
                    <MenuItem
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      component="a"
                      href={page.href}
                    >
                      {page.label}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
