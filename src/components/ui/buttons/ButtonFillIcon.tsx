import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

const ButtonFillIcon: FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        bgcolor: "rgba(91, 65, 166, 1)",
        border: "1px solid transparent",
        borderRadius: "8px",
        "&: hover": {
          bgcolor: "rgba(91, 65, 166, 1)",
        },
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default ButtonFillIcon;
