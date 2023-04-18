import { createTheme, darkScrollbar } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            fontSize: "1.5rem",
          },
          body2: {
            fontSize: "1.2rem",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar(undefined),
            scrollbarWidth: "thin",
          },
        },
      },
    },
  })
);

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            fontSize: "1.5rem",
          },
          body2: {
            fontSize: "1.2rem",
          },
        },
      },
    },
  })
);

export { darkTheme, lightTheme };
