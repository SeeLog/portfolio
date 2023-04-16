import React, { useCallback } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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

  return (
    <Box
      bg={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
      backdropFilter="auto"
      backdropBlur="4px"
      px={4}
      position="fixed"
      as="header"
      w="100%"
      zIndex={100}
    >
      <Flex h="24" alignItems="center" justifyContent="space-between">
        <Box
          color={colorMode === "light" ? "white" : "white"}
          as="h1"
          fontSize="3xl"
        >
          seelog.me
        </Box>
        <Stack direction="row">
          <Button onClick={toggle} size="lg">
            {colorMode === "light" ? <MoonIcon boxSize="6" /> : <SunIcon boxSize="6" />}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
