import { useTheme } from "@emotion/react";
import { alpha, Card, CardContent, CardProps } from "@mui/material";
import { FC } from "react";

interface OptionCardProps extends CardProps {
  active?: boolean;
}

const OptionCard: FC<OptionCardProps> = (props) => {
  const theme = useTheme();
  
  return (
    <Card
      {...props}
      sx={{
        ...props.sx,
        border: `1px solid ${
          props.active
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText
        }`,
        bgcolor: alpha(
          props.active
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
          0.16
        ),
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          width: "100%",
          padding: "16px !important",
          position: "relative",
        }}
      >
        {props.children}
      </CardContent>
    </Card>
  );
};

export default OptionCard;
