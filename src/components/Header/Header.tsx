import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Logo from "../../shared/ui/Logo/Logo";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Box from "@mui/material/Box";
import LocalSelector from "../../shared/ui/LocaleSelector/LocaleSelector";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const Header = () => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const pages = [
    t("header.course"),
    t("header.program"),
    t("header.feedback"),
    t("header.price"),
  ];

  return (
    <AppBar color="inherit" position="static">
      <Container
        sx={{
          padding: { xs: "0" },
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "space-between",
            }}
          >
            {pages.map((page, index) => {
              return (
                <List key={index}>
                  <ListItemButton>
                    <ListItemText primary={page} />
                  </ListItemButton>
                </List>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <LocalSelector />
            <Button variant="text" endIcon={<ArrowRightAltIcon />}>
              {t("header.personal")}
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
