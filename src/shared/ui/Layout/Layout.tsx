import React from "react";
import Box from "@mui/material/Box";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box className={styles.layout}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
