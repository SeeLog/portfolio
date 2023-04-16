import { extendTheme } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    ...defaultTheme.colors,
  },
  fonts: {
    ...defaultTheme.fonts,
    heading: '"Roboto", "Noto Sans JP", sans-serif',
    body: '"Roboto", "Noto Sans JP", sans-serif',
    title: '"DynaPuff", cursive',
  }
};

export default extendTheme(theme);
