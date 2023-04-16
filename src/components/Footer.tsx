import React from "react";
import { Center, Divider, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider py={10} />
      <Center py={10}>
        <Text fontSize="lg">
          © 2010 - 2023 <Link href="https://github.com/SeeLog">SeeLog</Link>
        </Text>
      </Center>
    </>
  );
};

export default Footer;
