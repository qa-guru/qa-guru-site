import React from "react";
import { Box } from "@mui/material";
import CardComponent from "../CardComponent";
import { IHorizontalSection } from "./HorizontalSection.types";

const HorizontalSection: React.FC<IHorizontalSection> = ({ pages }) => {
  return (
    <Box className="section">
      {pages.map((page, idx) => (
        <Box key={idx} className="slide">
          <CardComponent page={page} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalSection;
