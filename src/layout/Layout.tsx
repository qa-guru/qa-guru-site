import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import theme from "../theme/theme";
import styles from "./Layout.module.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box className={styles.layout}>
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
