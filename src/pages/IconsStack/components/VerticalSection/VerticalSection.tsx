import React from "react";
import { Box } from "@mui/material";
import CardComponent from "../CardComponent";
import { IVerticalSection } from "./VerticalSection.types";

const VerticalSection: React.FC<IVerticalSection> = ({ pages }) => {
  return (
    <>
      {pages.map((page, index) => (
        <Box key={index} className="section">
          <CardComponent page={page} />
        </Box>
      ))}
    </>
  );
};

export default VerticalSection;
