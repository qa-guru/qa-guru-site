import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import theme from "../theme/theme";
import styles from "./Layout.module.scss";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Box
     sx={{
       backgroundColor: "#F9F9F9"
     }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box 
          sx={{
            marginLeft: "auto",
            marginRight: "auto"
          }}>
          <Outlet />
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white"
          }}>
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
