import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";
import { Global } from "@emotion/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { globalStyles } from "../styles/global";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../styles/theme";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Careers from "../components/Career";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <ChakraProvider theme={theme}>
        <Header />
        <Hero />
        <Container maxW="container.xl" centerContent>
          <AboutMe />
          <Skills />
          <Careers />
        </Container>
      </ChakraProvider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>seelog.me</title>;
