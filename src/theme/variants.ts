import merge from "deepmerge";
import { THEMES } from "../context/constants";

const typography = {
  100: "#F3F3F3",
  200: "#E8E8E8",
  300: "#D0D0D0",
  400: "#A1A1A1",
  500: "#727272",
  600: "#434343",
  700: "#141414",
};

const accent = {
  100: "rgba(91, 65, 166, 0.16)",
  700: "rgba(91, 65, 166, 1)",
};

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: "light",
    primary: {
      main: accent[700],
      contrastText: typography[400],
    },
    secondary: {
      main: accent[100],
      contrastText: typography[500],
    },
    gray: typography[600],
    white: "#FFF",
    background: {
      default: accent[700],
      paper: "#FFF",
    },
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK,
  palette: {
    mode: "dark",
    primary: {
      main: typography[600],
      contrastText: "#FFF",
    },
    background: {
      default: "#1B2635",
      paper: "#233044",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
  },
});

const variants: Array<VariantType> = [defaultVariant, darkVariant];

export default variants;

export type VariantType = {
  name: string;
  palette: {
    primary: MainContrastTextType;
    secondary: MainContrastTextType;
  };
};

type MainContrastTextType = {
  main: string;
  contrastText: string;
};
