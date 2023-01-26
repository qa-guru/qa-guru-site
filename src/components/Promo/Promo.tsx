import React from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import JavaIcon from "../../assets/icons/java.png";
import JUnit5Icon from "../../assets/icons/jUnit5.png";
import SwiftIcon from "../../assets/icons/swift.png";
import SpringIcon from "../../assets/icons/spring.png";
import RestIcon from "../../assets/icons/rest.png";
import JdbcIcon from "../../assets/icons/jdbc.png";
import XCTestIcon from "../../assets/icons/xcTest.png";
import WiremockIcon from "../../assets/icons/wiremock.png";
import KaspressoIcon from "../../assets/icons/kaspresso.png";
import GRPCIcon from "../../assets/icons/gRPC.png";
import SOAPApiIcon from "../../assets/icons/soapApi.png";
import AllureIcon from "../../assets/icons/allure.png";
import GradleIcon from "../../assets/icons/gradle.png";
import DockerIcon from "../../assets/icons/docker.png";
import JiraIcon from "../../assets/icons/jira.png";
import theme from "../../theme/theme";
import { useTranslation } from "react-i18next";

const Icons: string[] | any[] = [
  {icon: JavaIcon, title: "Java"},
  {icon: JUnit5Icon, title: "JUnit5"},
  {icon: SwiftIcon, title: "Swift"},
  {icon: SpringIcon, title: "Spring"},
  {icon: RestIcon, title: "REST assured"},
  {icon: JdbcIcon, title: "JDBC"},
  {icon: XCTestIcon, title: "XCTest"},
  {icon: WiremockIcon, title: "Wiremock"},
  {icon: KaspressoIcon, title: "Kaspresso"},
  {icon: GRPCIcon, title: "gRPC"},
  {icon: SOAPApiIcon, title: "SOAP Api"},
  {icon: AllureIcon, title: "Allure"},
  {icon: GradleIcon, title: "Gradle"},
  {icon: DockerIcon, title: "Docker"},
  {icon: JiraIcon, title: "Jira"},
];

const Promo: React.FC = (props) => {

  const { t } = useTranslation();

  const Pros = t<string, any[]>("promo.points", { returnObjects: true });

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container mt={15}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}>
            <Grid xl={6} lg={5.8} md={12} sm={12} xs={12}>
              <Box>            
                <Typography variant="h4" mb={5}
                  sx={{
                    fontWeight: 600,
                  }}>
                    {t("promo.head")}
                </Typography>
              </Box>
              <Box>            
                <Typography variant="h3" mb={5}
                  sx={{
                    fontWeight: 600,
                  }}>
                    {t("promo.title")}
                </Typography>
              </Box>
              <Grid>
              {Pros.map((value) => (
                <Box>
                  <Typography variant="h6"
                    sx={{
                      fontWeight: 600,
                    }}>
                      {value}
                  </Typography>
                </Box>
              ))}             
                  <Button variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      marginTop: "50px",
                      height: "40px",
                      width: "60%"
                    }}>
                      {t("promo.button")}
                </Button>                
              </Grid>
            </Grid>
            <Grid xl={6} lg={5} md={11} sm={12} xs={12}
              sx={{
                border: 1,
                backgroundColor: "white",
                marginTop: {
                  xs: "100px",
                  sm: "100px",
                  md: "100px",
                  lg: 0,
                  xl: 0
                }
              }}>
            <Box m={2}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(3, 1fr)",
                  sm: "repeat(5, 1fr)",
                  md: "repeat(5, 1fr)",
                  lg: "repeat(5, 1fr)",
                  xl: "repeat(5, 1fr)",
                },
              }}>
                {Icons.map((value) => 
                  <Box m={2}>
                    <Box mb={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <img src={value.icon} />
                    </Box>
                    <Typography variant="body1" align="center">
                      {value.title}
                    </Typography>
                  </Box>  
                )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
};

export default Promo;
