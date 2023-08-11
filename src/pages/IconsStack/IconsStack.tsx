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
        <Box key={i} sx={style.iconWrapper}>
          <img
            src={require(`./icons/${icon.src}`)}
            alt={icon.title}
            style={{
              filter: icon.colored ? "none" : "grayscale(100%)",
            }}
          />
          <Typography
            style={{
              fontSize: "10px",
              textAlign: "center",
              marginTop: 5,
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            {icon.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Grid container sx={{ backgroundColor: "black" }}>
      <Grid item xs={4} sx={style.fixedIcons}>
        {renderIcons(pages[activePage].icons)}
      </Grid>

      <Grid item xs={8}>
        <ReactFullpage
          licenseKey="9L28I-4PY27-P1KVJ-4EJ4J-JNNSP"
          // @ts-ignore
          credits={false}
          onLeave={(origin, destination, direction) => {
            setActivePage(destination.index);
          }}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {pages.map((page, index) => (
                <Box key={index} className="section">
                  <Card sx={style.centeredContent}>
                    <CardContent>
                      <Typography variant="h3">{page.Title}</Typography>
                      <Box mt={5}>
                        <img
                          style={style.imgMain}
                          src={require(`../../assets/pagesImg/${page.Image}`)}
                          alt={page.Title}
                        />
                      </Box>
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
