import React, { useCallback, useContext } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import ColorModeContext from "../context/ColorModeContext";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode, LightMode } from "@mui/icons-material";

const headerLinks = [
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Works", href: "#works" },
];

const Header: React.FC = () => {
  const { colorMode, toggleColorMode, getColorWithMode } =
    useContext(ColorModeContext);

  const toggle = useCallback(() => {
    toggleColorMode();
    const styleEl = document.createElement("style");
    const cssText = document.createTextNode(
      "html * { transition: color, background-color 0.3s ease-out!important }"
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  }, [toggleColorMode]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setMenuOpen(true);
    },
    []
  );
  const handleMenuItemClick = useCallback(
    (event: React.MouseEvent<HTMLElement>, scrollTarget: string) => {
      // Keep scrolling after menu closed
      setTimeout(() => {
        scrollTo(scrollTarget, "start");
      }, 0);
      setMenuOpen(false);
    },
    []
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: getColorWithMode(
            "rgba(0, 0, 0, 0.5)",
            "rgba(255, 255, 255, 0.2)"
          ),
        }}
      >
        <Toolbar disableGutters>
          {
            // 狭い画面ではハンバーガーメニューを表示
          }
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerLinks.map((link) => (
                <MenuItem
                  onClick={async (event) => {
                    handleMenuItemClick(event, link.href);
                  }}
                  key={link.name}
                >
                  <Typography>{link.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              pl: 2,
              flexGrow: {
                xs: 1,
                md: 1,
              },
            }}
          >
            <Typography
              variant="h5"
              fontFamily="dynapuff"
              onClick={() => scrollTo("#hero", "start")}
              sx={{
                display: "inline-block",
                cursor: "pointer",
                ":hover": {
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in-out",
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
                },
              }}
            >
              seelog.me
            </Typography>
          </Box>

          {
            // でかい画面ではヘッダーリンクを表示
          }
          <Box
            display={{ xs: "none", md: "flex" }}
            sx={{
              flexGrow: 1,
            }}
          >
            {headerLinks.map((link) => (
              <Button
                color="inherit"
                onClick={() => {
                  scrollTo(link.href, "start");
                }}
                key={link.name}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          <Box>
            <Button onClick={toggle} color="inherit" aria-label="モード切替">
              {colorMode === "light" ? <LightMode /> : <DarkMode />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
