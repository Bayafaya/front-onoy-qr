import { Box } from "@mui/material";
import OrderCard from "./OrderCard";
import { IClientItems } from "../../../interfaces/order";

type BasketProps = {
  basketList: IClientItems["bucket"];
};

const Basket = ({ basketList }: BasketProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
      }}
    >
      <OrderCard showCounter={true} active list={basketList} color="#17784D" />
    </Box>
  );
};

export default Basket;
