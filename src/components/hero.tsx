import React from "react";
import {
  Center,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack minH={"100vh"} minW="100wh" direction={{ base: "row" }} id="hero">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <IconAndName />
      </Flex>
      <Flex flex={2}>
        {colorMode === "light" ? (
          <StaticImage
            src="../images/hawaii.jpg"
            alt="Hawaii"
            objectFit="cover"
          />
        ) : (
          <StaticImage
            src="../images/sunset.jpg"
            alt="Hawaii"
            objectFit="cover"
          />
        )}
      </Flex>
    </Stack>
  );
};

const IconAndName = () => {
  return (
    <Stack spacing={6} w={"full"}>
      <Center
        id="icon"
        style={{
          transition: "all 0.3s ease-in-out",
        }}
        _hover={{
          transform: "scale(1.1)",
          filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))",
        }}
        onClick={() => {
          // animation rotate
          const icon = document.getElementById("icon");
          icon?.classList.add("rotate");
          setTimeout(() => {
            icon?.classList.remove("rotate");
          }
          , 1000);
        }}
      >
        <StaticImage
          src="../images/icon.png"
          alt="icon"
          objectFit="cover"
          style={{
            borderRadius: "50%",
          }}
        />
      </Center>
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", xl: "6xl" }}
          lineHeight={"110%"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in-out",
            filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))",
          }}
        >
          ろぐみ
        </Heading>
      </Center>
      <Center>
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", xl: "4xl" }}
          fontWeight={400}
          lineHeight={"110%"}
        >
          SeeLog
        </Heading>
      </Center>
    </Stack>
  );
};

export default Hero;
