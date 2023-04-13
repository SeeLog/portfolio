import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Header></Header>
      <Container maxW="container.xl" centerContent>
        {children}
      </Container>
    </>
  );
};

export default Layout;
