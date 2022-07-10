import { createTheme } from "@mui/material/styles";

const COLORS = {
  primary: "#00adb5",
  secondary: "#95defb",
  white: "#fff",
  black: "#000",
};

declare module "@mui/material/styles" {
  interface Theme {
    sizes: {
      headerHeight: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    sizes: {
      headerHeight: string;
    };
  }
}

export const theme = createTheme({
  // spacing: [0, 4, 8, 16, 32, 64],
  sizes: {
    headerHeight: "4rem",
  },
  // palette: {
  //   primary: {
  //     main: COLORS.primary,
  //     contrastText: COLORS.white,
  //   },
  //   secondary: {
  //     main: COLORS.secondary,
  //   },
  // },
  mixins: {
    toolbar: {
      minHeight: "4rem",
    },
  },
});
