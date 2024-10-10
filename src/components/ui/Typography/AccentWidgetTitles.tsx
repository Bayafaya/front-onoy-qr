import React from "react";
import { Typography, TypographyProps } from "@mui/material";

const AccentWidgetTitles: React.FC<TypographyProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Typography
      {...otherProps}
      sx={{
        fontWeight: 600,
        fontSize: "17px",
        letterSpacing: "-0.4px",
        textWrap: "wrap",
        ...otherProps.sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default AccentWidgetTitles;
