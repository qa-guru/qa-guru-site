import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ReactFullpage from "@fullpage/react-fullpage";
import { IDataIconsStack, IIcon } from "./IconsStack.types";
import { style } from "./styles";

const IconsStack: React.FC<IDataIconsStack> = ({ pages }) => {
  const [activePage, setActivePage] = useState(0);
  const renderIcons = (icons: IIcon[]) => (
    <Box sx={style.centeredIcons}>
      {icons.map((icon, i) => (
        <Box key={i} style={style.iconWrapper}>
          <img
            src={require(`./icons/${icon.src}`)}
            alt={icon.title}
            style={{
              filter: icon.colored ? "none" : "grayscale(100%)",
            }}
          />
          <Typography
            variant="caption"
            style={{ textAlign: "center", marginTop: 5, color: "white" }}
          >
            {icon.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Grid container sx={{ backgroundColor: "black" }}>
      <Grid item xs={3} sx={style.fixedIcons}>
        {renderIcons(pages[activePage].icons)}
      </Grid>

      <Grid item xs={9}>
        <ReactFullpage
          licenseKey="9L28I-4PY27-P1KVJ-4EJ4J-JNNSP"
          onLeave={(origin, destination, direction) => {
            setActivePage(destination.index);
          }}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {pages.map((page, index) => (
                <Box key={index} className="section">
                  <Card style={style.centeredContent}>
                    <CardContent>
                      <Typography variant="h3" component="div">
                        {page.Title}
                      </Typography>
                      <img
                        style={style.imgMain}
                        src={require(`../../assets/pagesImg/${page.Image}`)}
                        alt={page.Title}
                      />
                      <Typography variant="h6">{page.Description}</Typography>
                      <Typography variant="body2" width="60%">
                        {page.Fulltext}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default IconsStack;
