import React, { useCallback } from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const headerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in-out",
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
          }}
        >
          <Link
            onClick={() => scrollTo("#hero", "start")}
            _hover={{
              textDecoration: "none",
            }}
          >
            seelog.me
          </Link>
        </Box>
        {!isMobile && (
          <Stack direction="row">
            {headerLinks.map((link) => (
              <Button
                as="a"
                fontSize="xl"
                onClick={() => scrollTo(link.href, "start")}
                key={link.name}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        )}
        {isMobile && (
          <Popover>
            <PopoverTrigger>
              <Button size="lg">Menu</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Stack direction="column">
                  {headerLinks.map((link) => (
                    <Button
                      as="a"
                      fontSize="xl"
                      onClick={() => scrollTo(link.href, "start")}
                      key={link.name}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
        <Stack direction="row">
          <Button onClick={toggle} size="lg">
            {colorMode === "light" ? (
              <MoonIcon boxSize="6" />
            ) : (
              <SunIcon boxSize="6" />
            )}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
