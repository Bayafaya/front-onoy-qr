import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

const ButtonBlurIcon: FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        border: "1px solid rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(2px)",
        borderRadius: "8px !important",
        "&:active": {
          border: "1px solid rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(2px)",
          borderRadius: "8px !important",
        },
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default ButtonBlurIcon;
