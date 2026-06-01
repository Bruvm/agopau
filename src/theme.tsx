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
      dark: "#151D42",
    },
    secondary: {
      main: "#D62828",
    },
    background: {
      default: "#FAFAFA",
      paper: "#E5E9F4",
    },
    text: {
      primary: "#1A1A2E",
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

export const EASE_PREMIUM = "cubic-bezier(0.16, 1, 0.3, 1)";

export default theme;
