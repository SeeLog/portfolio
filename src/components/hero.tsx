import React from "react";
import { Center, Flex, Heading, Stack, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack minH={"100vh"} minW="100wh" direction={{ base: "row" }}>
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
      <Center>
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
