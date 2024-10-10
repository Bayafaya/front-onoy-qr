import { Card, CardProps } from "@mui/material";
import React from "react";

const AccentCard: React.FC<CardProps> = ({ children, ...otherProps }) => {
  return (
    <Card style={{ borderRadius: "14px" }}  {...otherProps}>
      {children}
    </Card>
  );
};

export default AccentCard;
