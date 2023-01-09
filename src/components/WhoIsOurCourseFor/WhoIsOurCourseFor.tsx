import React from "react";
import { Container, Typography, Grid, Box, } from "@mui/material";
import { useTranslation } from "react-i18next";

type whomProps = {
  title: string;
  description: string;
};

const WhoIsOurCourseFor: React.FC = (props) => {
  
  const { t } = useTranslation();

  const Points = t<string, whomProps[]>("whom.points", { returnObjects: true });
  
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container mt={10}>
          <Box>
            <Box>            
              <Typography variant="h4" mb={10}
                sx={{
                  fontWeight: 600,
                }}>
                  {t("whom.title")}
              </Typography>
            </Box>
              <Grid 
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row"
                  },
                  justifyContent: "space-between",
                  border: 1,
                  padding: "3vw 2vw",
                  backgroundColor: "white",
                }}>
                  {Points.map((value) => (
                <Grid xl={3} lg={3}>
                  <Box
                    sx={{
                      height: "50%"
                    }}>
                    <Typography variant="h5"
                      sx={{
                        fontWeight: 600,
                      }}>
                      {value.title}
                    </Typography>
                  </Box>
                  <Box mt={8} mb={8}>
                    <Typography variant="body1">
                      {value.description} 
                    </Typography>
                  </Box> 
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  )
};

export default WhoIsOurCourseFor;
