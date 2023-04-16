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
    heading: '"Roboto", "Noto Sans JP", sans-serif !important',
    body: '"Roboto", "Noto Sans JP", sans-serif !important',
    title: '"DynaPuff", cursive !important',
  }
};

export default extendTheme(theme);
