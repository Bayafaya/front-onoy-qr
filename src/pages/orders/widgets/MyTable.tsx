import { Box, Typography } from "@mui/material";
import OrderCard from "./OrderCard";
import BottomFloatCard from "../../../components/ui/float/BottomFloatCard";
import { useTheme } from "@emotion/react";
import useConfirmed from "../../../hooks/useConfirmed";

const MyTable = () => {
  const { data } = useConfirmed();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
      }}
    >
      {data.client_items &&
        data.client_items.confirmed.map((item, index) => (
          <OrderCard
            key={index}
            list={{
              items: item.confirmed.items,
              total_original_cost: item.total.total_original_cost,
              total_discount_cost: item.total.total_discount_cost,
            }}
            color={item.client.color}
            showCounter={false}
            avatar={item.client.avatar}
            name={item.client.name}
          />
        ))}
      <BottomFloatCard bgColor={theme.palette.primary.main}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography color={theme.palette.white} variant="h2" paddingY="10px">
            Общая сумма: {data.total_bill || "0"} с
          </Typography>
        </Box>
      </BottomFloatCard>
    </Box>
  );
};

export default MyTable;
