import React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "../../shared/ui/Logo/Logo";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        padding: { xs: "0" },
      }}
      maxWidth="xl"
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          maxWidth: "100%",
          padding: "2vw",
          margin: 0,
        }}
      >
        <Grid>
          <Box
            sx={{
              marginBottom: {
                xs: "10px",
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
            }}
          >
            <Logo />
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Typography variant="body2" color="text.secondary" align="center">
              {t("footer.questions")}
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: {
                xs: "20px",
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
            }}
          >
            <Typography variant="body2" color="text.secondary" align="center">
              {t("footer.feedback")}
              <Link color="inherit" href="#">
                {t("footer.chat")}
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {"© qa.guru"}
              {new Date().getFullYear()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
