import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";
import "@fontsource/dynapuff";
import { Global } from "@emotion/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { globalStyles } from "../styles/global";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../styles/theme";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <ChakraProvider theme={theme}>
        <Header />
        <Hero />
        <Container maxW="8xl" centerContent>
          <AboutMe />
          <Skills />
          <Timeline />
          <Works />
          <Contact />
        </Container>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>seelog.me</title>;
