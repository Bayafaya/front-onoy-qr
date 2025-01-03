import { Card, CardContent, CardProps } from "@mui/material";
import { FC } from "react";

interface CardProp extends CardProps {
  bgColor?: string;
}

const BottomFloatCard: FC<CardProp> = (props) => {
  return (
    <Card
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
        borderRadius: 0,
        zIndex: 1000,
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: props.bgColor || "#fff",
      }}
      {...props}
    >
      <CardContent
        sx={{
          height: "100%",
          width: "100%",
          paddingX: "20px !important",
          paddingY: "16px !important",
          position: "relative",
        }}
      >
        {props.children}
      </CardContent>
    </Card>
  );
};

export default BottomFloatCard;
