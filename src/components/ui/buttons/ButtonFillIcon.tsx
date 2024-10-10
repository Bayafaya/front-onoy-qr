import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";
import styled from "@emotion/styled";

const  AccentColorBtn = styled(IconButton)`
  background-color: ${(props) => props.theme.palette.primary.main};
  `

const ButtonFillIcon:FC<IconButtonProps> = (props) => {
  return (
    <AccentColorBtn
      {...props}
      sx={{
        border: "1px solid transparent",
        borderRadius: "8px",
        ...props.sx
      }}
    >
      {props.children}
    </AccentColorBtn>
  );
};

export default ButtonFillIcon;
