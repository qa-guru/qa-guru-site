import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const LocalSelector = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      sx={{ display: "grid", gap: 0.5, gridTemplateColumns: "repeat(2, 1fr)" }}
    >
      <Button variant="outlined" onClick={() => changeLanguage("en")}>
        {t("english")}
      </Button>
      <Button variant="outlined" onClick={() => changeLanguage("ru")}>
        {t("russian")}
      </Button>
    </Box>
  );
};

export default LocalSelector;
