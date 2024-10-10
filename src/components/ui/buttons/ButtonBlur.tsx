import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

const ButtonBlur: FC<ButtonProps> = (props) => {
  return (
    <Button
    {...props}
      sx={{
        ...props.sx,
        border: "1px solid rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(62px)",
        borderRadius: "8px",
        color: "white",
      }}
      variant="outlined"
    >
      {props.children}
    </Button>
  );
};

export default ButtonBlur;
