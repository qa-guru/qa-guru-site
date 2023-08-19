import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ReactFullpage from "@fullpage/react-fullpage";
import { IDataIconsStack, IIcon } from "./IconsStack.types";
import { style } from "./styles";
import HorizontalSection from "./components/HorizontalSection";
import VerticalSection from "./components/VerticalSection";
import IconsRenderer from "./components/IconsRenderer";

const IconsStack: React.FC<IDataIconsStack> = ({ pages, scroll }) => {
  const [activePage, setActivePage] = useState(0);
  const isHorizontal = scroll === "horizontal";

  return (
    <Grid container sx={{ backgroundColor: "black" }}>
      <Grid item xs={4} sx={style.fixedIcons}>
        <IconsRenderer icons={pages[activePage].icons} />
      </Grid>

      <Grid item xs={8}>
        <ReactFullpage
          licenseKey="9L28I-4PY27-P1KVJ-4EJ4J-JNNSP"
          // @ts-ignore
          credits={false}
          scrollingSpeed={700}
          slidesNavigation={isHorizontal}
          onLeave={(destination) => {
            setActivePage(destination.index);
          }}
          onSlideLeave={(section, destination) => {
            setActivePage(destination.index);
          }}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {isHorizontal ? (
                <HorizontalSection pages={pages} />
              ) : (
                <VerticalSection pages={pages} />
              )}
            </ReactFullpage.Wrapper>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default IconsStack;
