import React from "react";
import { useTranslation } from "react-i18next";
import { Button, IconButton, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactComponent as EnglishIcon } from "../../../assets/iconsPng/english.svg";
import { ReactComponent as RussiaIcon } from "../../../assets/iconsPng/russia.svg";

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
      <IconButton onClick={() => changeLanguage("en")}>
        <SvgIcon>
          <EnglishIcon />
        </SvgIcon>
      </IconButton>
      <IconButton onClick={() => changeLanguage("ru")}>
        <SvgIcon>
          <RussiaIcon />
        </SvgIcon>
      </IconButton>
    </Box>
  );
};

export default LocalSelector;
