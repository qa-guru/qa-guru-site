import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#2ccca6",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          texttransform: "none",
        },
      },
    },
  },
});

export default theme;
