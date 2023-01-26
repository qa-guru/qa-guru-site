import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import InputRHF from "../../shared/ui/InputRHF";
import { useTranslation } from "react-i18next";
import theme from "../../theme/theme";

export interface FormValues {
  name: string,
  email: string,
  phone: string
};

const ContactForm: React.FC = (props) => {

  const { control } = useForm<FormValues>();

  const { t } = useTranslation();

  return (
    <form className="form">
      <Container maxWidth="xl">
        <Grid>
          <Box mt={8} mb={10}
            sx={{
              backgroundColor: "black",
              padding: "2vw 4vw",
            }}>
            <Box>
              <Typography 
                variant="h5" mb={4} color="white"
                sx={{
                  fontWeight: 600,
                }}>
                  {t("form.title")}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" mb={4} color="white">
                {t("form.info")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { 
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row"
                },
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2"
              }}>
                <InputRHF.InputTextField 
                  name="Name"
                  control={control}
                  placeholder={t("form.name")}
                />
                <InputRHF.InputTextField 
                  name="Phone"
                  control={control}
                  placeholder={t("form.phone")}
                  type="tel"
                />                
                <InputRHF.InputTextField 
                  name="Email"
                  control={control}
                  placeholder={t("form.email")}
                  type="email" 
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "30%",
                      lg: "30%",
                      xl: "30%"
                    }, 
                    marginBottom: "20px",
                    height: "40px",
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.primary.main,
                    }
                  }}>
                    {t("form.button")}
                </Button>
            </Box>
            <Box>
              <Typography variant="body1" mt={2} color="white">
                {t("form.accept")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </form>
  );
};

export default ContactForm;
