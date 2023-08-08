import React, { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ReactFullpage from "@fullpage/react-fullpage";
import { IDataIconsStack } from "./IconsStack.types";
import { style } from "./styles";

const IconsStack: React.FC<IDataIconsStack> = ({ pages }) => {
  const [activePage, setActivePage] = useState(0);

  return (
    <Grid container>
      <Grid item xs={3} sx={style.fixedIcons}>
        <div style={style.centeredIcons}>
          {pages[activePage].icons.map((icon, i) => (
            <img
              src={require(`./icons/${icon.src}`)}
              alt={icon.title}
              style={{
                filter: icon.colored ? "none" : "grayscale(100%)",
              }}
            />
          ))}
        </div>
      </Grid>
      <Grid item xs={9}>
        <ReactFullpage
          credits="1" // Добавьте это
          onLeave={(origin, destination, direction) => {
            setActivePage(destination.index);
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {pages.map((page, index) => (
                  <div key={index} className="section">
                    <Card style={style.centeredContent}>
                      <CardContent>
                        <Typography variant="h4" component="div">
                          {page.Title}
                        </Typography>
                        <img
                          style={style.imgMain}
                          src={require(`../../assets/pagesImg/${page.Image}`)}
                          alt={page.Title}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {page.Description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {page.Fulltext}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default IconsStack;
