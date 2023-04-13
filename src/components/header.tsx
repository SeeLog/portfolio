import React from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="fixed" as="header" w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>seelog.me</Box>
        <Stack direction="row">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button>Hoge</Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
