import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ReactFullpage from "@fullpage/react-fullpage";
import { IDataIconsStack } from "./IconsStack.types";

const IconsStack: React.FC<IDataIconsStack> = ({ pages }) => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {pages.map((page, index) => (
              <div key={index} className="section">
                <Card>
                  <Grid container>
                    <Grid item xs={2}>
                      {page.icons.map((icon, i) => (
                        <img
                          src={icon.src}
                          alt={icon.title}
                          style={{
                            filter: icon.colored ? "none" : "grayscale(100%)",
                          }}
                        />
                      ))}
                    </Grid>
                    <Grid item xs={10}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {page.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {page.Description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {page.Fulltext}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="140"
                        image={page.Image}
                        alt={page.Title}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default IconsStack;
