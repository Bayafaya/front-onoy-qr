import { FC } from "react";
import OptionCard from "../../../components/ui/cards/OptionCard";
import OrderHeader from "../ui/OrderHeader";
import OrderProductCard from "../../../components/ui/cards/OrderProductCard";
import { Box } from "@mui/material";
import { IClientItems } from "../../../interfaces/order";

type OrderCardProps = {
  list: IClientItems["bucket"];
  color?: string;
  showCounter?: boolean;
  name?: string;
  avatar?: string;
  handleChangeCount?: (value: {
    [key: string]: number;
    totalCost: number;
  }) => void;
  deleteOrder?: (orderId: string) => void;
};

const OrderCard: FC<OrderCardProps> = ({
  list,
  avatar,
  color,
  showCounter,
  name,
  handleChangeCount,
  deleteOrder,
}) => {
  const totalCountOfItems = () => {
    return list?.items.reduce((acc, item) => {
      return acc + item.discount_cost;
    }, 0);
  };
  return (
    <OptionCard color={color}>
      <Box display="grid" gap={4}>
        {list && (
          <OrderHeader
            totalCost={!showCounter ? totalCountOfItems() : undefined}
            color={color}
            name={name}
            avatar={avatar}
          />
        )}
        {list &&
          list.items.map((item, index) => (
            <div key={index}>
              <OrderProductCard
                handleChangeCount={handleChangeCount}
                showCounter={showCounter}
                item={item}
                color={color}
                deleteOrder={deleteOrder}
              />
            </div>
          ))}
      </Box>
    </OptionCard>
  );
};

export default OrderCard;
