import { createContext } from "react";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  colorMode: "light",
  getColorWithMode: (lightColor: string, darkColor: string): string => {
    return lightColor;
  },
});

export default ColorModeContext;
