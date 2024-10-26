import { Card, CardContent, CardProps } from "@mui/material";
import { FC } from "react";

const BottomFloatCard:FC<CardProps> = ({children}) => {
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
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          width: "100%",
          paddingX: "20px !important",
          paddingY: "24px !important",
          position: "relative",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default BottomFloatCard;
