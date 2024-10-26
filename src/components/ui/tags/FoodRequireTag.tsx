import { useTheme } from "@emotion/react";
import {  Typography, TypographyProps } from "@mui/material";
import { FC } from "react";

interface FoodRequireTagProps extends TypographyProps {
  active?: boolean;
}

const FoodRequireTag: FC<FoodRequireTagProps> = (props) => {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      variant="body2"
      sx={{
        ...props.sx,
        paddingX: 2,
        border: `1px solid ${
          props.active
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText
        }`,
        bgcolor: props.active
          ? theme.palette.primary.main
          : theme.palette.white,
        color: props.active ? theme.palette.white : "inherit",
        borderRadius: "32px",
        textAlign: "center",
        width: "fit-content",
        fontWeight: 500,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default FoodRequireTag;
