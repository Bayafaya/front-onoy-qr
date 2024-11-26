import { Box, Grid2, Typography } from "@mui/material";
import { FC } from "react";
import useHandleColor from "../../../hooks/useHandleColor";

type OrderHeaderProps = {
  active?: boolean;
  color?: string;
  totalCost: number;
};

const OrderHeader: FC<OrderHeaderProps> = ({ active, color, totalCost }) => {
  const getColor = useHandleColor({
    active,
    color,
  });
  return (
    <Grid2 display="flex" alignItems="center" justifyContent="space-between">
      <Box
        sx={{
          bgcolor: getColor,
          width: "44px",
          aspectRatio: "1/1",
          borderRadius: "100%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <img
          src="/static/lion.png"
          alt="animal"
          style={{ width: "40px", aspectRatio: "1/1" }}
        />
      </Box>
      <Typography variant="h1" mr="auto" ml={3} fontWeight={600}>
        Львенок
      </Typography>
      <Typography variant="h1" fontWeight={600} color={getColor}>
        {totalCost || "0"} с
      </Typography>
    </Grid2>
  );
};

export default OrderHeader;
