import { useTheme } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

const AccentButton: FC<ButtonProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        borderRadius: "8px",
        fontWeight: 600,
        color: theme.palette.white,
        height: "48px",
      }}
    >
      {children}
    </Button>
  );
};

export default AccentButton;
