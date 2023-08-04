import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { InView, useInView } from "react-intersection-observer";
import { IDataIconsStack } from "./IconsStack.types";
import { style } from "./styles";

const IconsStack: React.FC<IDataIconsStack> = ({ pages }) => {
    return (
        <div>
            {pages.map((page, pageIndex) => (
                <Box key={pageIndex} style={{ height: "100vh" }}>
                    <Card>
                        <Grid container>
                            <Grid item xs={2} sx={style.fixedIcons}>
                                <Grid container sx={{ height: "100px", width: "100px" }}>
                                    {page.icons.map((icon, iconIndex) => (
                                        <Grid item key={iconIndex}>
                                            <InView as="div">
                                                {({ inView, ref }) => (
                                                    <img
                                                        src={require(`../../assets/icons/${icon.src}`)}
                                                        alt={icon.title}
                                                        data-type={icon.type}
                                                        ref={ref}
                                                        style={{
                                                            filter: icon.colored && inView ? "grayscale(100%)" : "none",
                                                        }}
                                                    />
                                                )}
                                            </InView>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={10} sx={style.centeredText}>
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
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            ))}
        </div>
    );
};

export default IconsStack;
