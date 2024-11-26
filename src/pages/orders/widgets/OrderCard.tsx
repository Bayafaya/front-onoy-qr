import { FC } from "react";
import OptionCard from "../../../components/ui/cards/OptionCard";
import OrderHeader from "../ui/OrderHeader";
import OrderProductCard from "../../../components/ui/cards/OrderProductCard";
import { Box } from "@mui/material";
import { IClientItems } from "../../../interfaces/order";

type OrderCardProps = {
  list: IClientItems["bucket"];
  active?: boolean;
  color?: string;
  showCounter?: boolean;
};

const OrderCard: FC<OrderCardProps> = ({ list, active, color, showCounter }) => {
  return (
    <OptionCard active={active}>
      <Box display="grid" gap={4}>
        {list && (
          <OrderHeader
            totalCost={list.total_discount_cost}
            active={active}
            color={color}
          />
        )}
        {list &&
          list.items.map((item) => (
            <div key={item.pk}>
              <OrderProductCard showCounter={showCounter} item={item} active={active} color={color} />
            </div>
          ))}
      </Box>
    </OptionCard>
  );
};

export default OrderCard;
