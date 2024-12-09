import { useTheme } from "@emotion/react";
import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

const ButtonFillIcon: FC<IconButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <IconButton
      {...props}
      sx={{
        bgcolor: theme.palette.primary.main,
        border: "1px solid transparent",
        borderRadius: "8px",
        "&:active": {
          bgcolor: theme.palette.primary.main,
          border: "1px solid transparent",
          borderRadius: "8px",
        },
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default ButtonFillIcon;
