import { FC } from "react";
import OptionCard from "../../../components/ui/cards/OptionCard";
import OrderHeader from "../ui/OrderHeader";
import OrderProductCard from "../../../components/ui/cards/OrderProductCard";
import { Box } from "@mui/material";

type OrderCardProps = {
  active?: boolean;
  color?: string;
};

const OrderCard: FC<OrderCardProps> = ({ active, color }) => {
  return (
    <OptionCard active={active}>
      <Box display="grid" gap={4}>
        <OrderHeader active={active} color={color} />
        <OrderProductCard active={active} color={color}/>
      </Box>
    </OptionCard>
  );
};

export default OrderCard;
