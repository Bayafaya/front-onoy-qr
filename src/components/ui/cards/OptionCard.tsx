import { useTheme } from "@emotion/react";
import { alpha, Card, CardContent, CardProps } from "@mui/material";
import { FC } from "react";

interface OptionCardProps extends CardProps {
  active?: boolean;
  color?: string;
}

const OptionCard: FC<OptionCardProps> = (props) => {
  const theme = useTheme();

  return (
    <Card
      {...props}
      sx={{
        ...props.sx,
        border: `1px solid ${
          props.color ? props.color : theme.palette.primary.contrastText
        }`,
        bgcolor: alpha(
          props.color ? props.color : theme.palette.primary.contrastText,
          0.16
        ),
        transition: "all 0.3s",
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
