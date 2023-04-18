import React, { useState, useMemo } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";
import "@fontsource/dynapuff";
import { Global } from "@emotion/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { globalStyles } from "../styles/global";
import { CssBaseline, ThemeProvider, Box, Grid, Paper } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { darkTheme, lightTheme } from "../styles/theme";
import ColorModeContext from "../context/ColorModeContext";
import "animate.css";

const IndexPage: React.FC<PageProps> = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
      colorMode: mode,
      getColorWithMode: (light: string, dark: string) =>
        mode === "light" ? light : dark,
    }),
    [mode]
  );

  const theme = useMemo(() => {
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <>
      <Global styles={globalStyles} />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Hero />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: 0,
            }}
          >
            <AboutMe />
            <Skills />
            <Timeline />
            <Works />
            <Contact />
          </Grid>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>seelog.me</title>;
