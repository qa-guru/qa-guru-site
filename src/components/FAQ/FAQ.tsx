import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

type faqProps = {
  question: string;
  answer: string;
  id: string;
  name: string;
};

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const { t } = useTranslation();

  const Faq = t<string, faqProps[]>("faq.objects", { returnObjects: true });

  return (
    <div>
      <Container maxWidth="xl">
        <Grid mt={15}>
          <Box>
            <Box>
              <Typography
                variant="h4"
                mb={5}
                sx={{
                  fontWeight: 600,
                }}
              >
                {"FAQ"}
              </Typography>
            </Box>
            {Faq.map((value) => (
              <Grid mb={4}>
                <Accordion
                  sx={{
                    border: 1,
                    padding: "1vw 4vw",
                    backgroundColor: "white",
                  }}
                  expanded={expanded === value.name}
                  onChange={handleChange(value.name)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {value.question}
                      </Typography>
                    </AccordionSummary>
                  </Box>
                  <AccordionDetails>
                    <Typography variant="body1">{value.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default FAQ;
