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
    <div className={styles.page}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box className={styles.layout}>
          <Outlet />
        </Box>
        <div className={styles.footer}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
