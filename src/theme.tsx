import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      white?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E2F6E",
      light: "#3C5BA9",
    },
    secondary: {
      main: "#D62828",
    },
    background: {
      default: "#F5F5F5",
      paper: "#E5E9F4",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    custom: {
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Arial", "sans-serif"].join(","),
  },
});

export default theme;

