import { Box, Grid2, Typography } from "@mui/material";
import { FC } from "react";

type OrderHeaderProps = {
  color?: string;
  totalCost?: number;
  name?: string;
  avatar?: string;
};

const OrderHeader: FC<OrderHeaderProps> = ({
  color,
  totalCost,
  name,
  avatar,
}) => {

  return (
    <Grid2 display="flex" alignItems="center" justifyContent="space-between">
      <Box
        sx={{
          bgcolor: color,
          width: "44px",
          aspectRatio: "1/1",
          borderRadius: "100%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <img
          src={avatar || ''}
          alt="animal"
          style={{ width: "40px", aspectRatio: "1/1" }}
        />
      </Box>
      <Typography variant="h1" mr="auto" ml={3} fontWeight={600}>
        {name || "Корзина"}
      </Typography>
      <Typography variant="h1" fontWeight={600} >
        {totalCost && `${totalCost} c`}
      </Typography>
    </Grid2>
  );
};

export default OrderHeader;
