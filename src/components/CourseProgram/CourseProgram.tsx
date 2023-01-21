import React from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import SOAPApiIcon from "../../assets/icons/soapApi.png";
import AllureIcon from "../../assets/icons/allure.png";
import SwiftIcon from "../../assets/icons/swift.png";
import JavaIcon from "../../assets/icons/java.png";
import SpringIcon from "../../assets/icons/spring.png";
import RestIcon from "../../assets/icons/rest.png";
import GradleIcon from "../../assets/icons/gradle.png";
import JUnit5Icon from "../../assets/icons/jUnit5.png";
import ProgramText from "../../assets/icons/programText.svg";
import theme from "../../theme/theme";
import { useTranslation } from "react-i18next";

type courseProps = {
  number: string;
  title: string;
};

const Icons: string[] | any[] = [
  { icon: SOAPApiIcon, title: "SOAP Api" },
  { icon: AllureIcon, title: "Allure" },
  { icon: SwiftIcon, title: "Swift" },
  { icon: JavaIcon, title: "Java" },
  { icon: SpringIcon, title: "Spring" },
  { icon: RestIcon, title: "REST assured" },
  { icon: GradleIcon, title: "Gradle" },
  { icon: JUnit5Icon, title: "JUnit5" },
];

const CourseProgram: React.FC = (props) => {
  const { t } = useTranslation();

  const Course = t<string, courseProps[]>("program.points", {
    returnObjects: true,
  });

  return (
    <div>
      <Container maxWidth="xl">
        <Box mt={15}>
          <Typography
            variant="h4"
            mb={10}
            sx={{
              fontWeight: 600,
            }}
          >
            {t("program.title")}
          </Typography>
        </Box>
        <Grid container spacing={{ xl: 15, lg: 8 }}>
          <Grid item xl={6} lg={5.8} md={12} sm={12} xs={12}>
            {Course.map((value) => (
              <Grid container>
                <Grid container item mb={5} xs={2}>
                  <Typography variant="body1">{value.number}</Typography>
                </Grid>
                <Grid
                  item
                  mb={5}
                  xs={10}
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "flex-end",
                      lg: "flex-end",
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "flex-start",
                    },
                  }}
                >
                  <Typography variant="body1">{value.title}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid container item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Grid
              container
              p={2}
              sx={{
                border: 1,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                item
                xl={10}
                lg={9}
                md={6}
                sm={8}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xl: "flex-start",
                    lg: "flex-start",
                    md: "space-around",
                    sm: "space-around",
                    xs: "space-around",
                  },
                }}
              >
                <Box>
                  <img src={ProgramText}></img>
                </Box>
              </Grid>
              <Grid
                container
                item
                xl={2}
                lg={3}
                md={6}
                sm={4}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xl: "flex-end",
                    lg: "flex-end",
                    md: "space-around",
                    sm: "space-around",
                    xs: "space-around",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xl: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                      md: "repeat(2, 1fr)",
                      sm: "repeat(2, 1fr)",
                      xs: "repeat(4, 1fr)",
                    },
                  }}
                >
                  {Icons.map((value) => (
                    <Box m={2}>
                      <Box
                        mb={1}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img src={value.icon} alt={value.title} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          mt={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              marginTop: "50px",
              height: "40px",
              width: "60%",
            }}
          >
            {t("program.button")}
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CourseProgram;
