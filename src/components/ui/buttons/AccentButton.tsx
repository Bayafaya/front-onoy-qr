import { useTheme } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

const AccentButton: FC<ButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <Button
      fullWidth
      variant="contained"
      {...props}
      sx={{
        borderRadius: "8px",
        fontWeight: 600,
        color: theme.palette.white,
        height: "48px",
        "&:disabled": {
          backgroundColor: theme.palette.grey[400],
        },
        transform: "all 0.3s",
      }}
    >
      {props.children}
    </Button>
  );
};

export default AccentButton;
