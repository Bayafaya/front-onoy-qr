import { Box } from "@mui/material";
import { IConfirmedItems } from "../../../interfaces/order";
import OrderCard from "./OrderCard";

type MyTableProps = {
  confirmedList: IConfirmedItems[];
};

const MyTable = ({ confirmedList }: MyTableProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
      }}
    >
      {confirmedList.map((item, index) => (
        <OrderCard
          key={index}
          list={{
            items: item.confirmed.items,
            total_original_cost: item.total.total_original_cost,
            total_discount_cost: item.total.total_discount_cost,
          }}
          color="#17784D"
          showCounter={false}
        />
      ))}
    </Box>
  );
};

export default MyTable;
