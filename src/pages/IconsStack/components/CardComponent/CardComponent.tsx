import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { style } from "./styles";
import { ICardComponent } from "./CardComponent.types";

const CardComponent: React.FC<ICardComponent> = ({ page }) => {
  return (
    <Card sx={style.centeredContent}>
      <CardContent>
        <Typography variant="h3">{page.Title}</Typography>
        <Box mt={5}>
          <img
            style={style.imgMain}
            src={require(`../../assets/img/${page.Image}`)}
            alt={page.Title}
          />
        </Box>
        <Typography variant="h6">{page.Description}</Typography>
        <Typography variant="body2" width="60%">
          {page.Fulltext}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
