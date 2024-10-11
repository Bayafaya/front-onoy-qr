import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
  },
  h2: {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "28px",
  },
  h3: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "32px",
  },
  h4: {
    fontSize: "1.0625rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "16px",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body1: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  body2: {
    fontSize: "10px",
    lineHeight: "14px",
  },
  button: {
    textTransform: "none",
  },
};

export default typography;
