import { Box } from "@mui/material";
import NavigationOrders from "./widgets/NavigationOrders";
import FoodTabsWidgets from "../../components/ui/tabs/FoodTabsWidgets";
import { useState } from "react";
import TabCustomPanel from "../../components/ui/tabs/TabCustomPanel";
import { TabContext } from "@mui/lab";
import Basket from "./widgets/Basket";
import MyTable from "./widgets/MyTable";
import useOrder from "../../hooks/useOrder";

const tabList = ["Корзина", "Мой стол"];

const Orders = () => {
  const { data } = useOrder();
  const [tab, setTab] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());
  };

  return (
    <Box>
      <NavigationOrders />
      <TabContext value={tab}>
        <FoodTabsWidgets
          order
          value={+tab}
          tabList={tabList}
          onChange={handleChange}
        />
        <TabCustomPanel value={"0"}>
          {data.client_items && (
            <Basket basketList={data.client_items.bucket} />
          )}
        </TabCustomPanel>
        <TabCustomPanel value={"1"}>
          {data.client_items && (
            <MyTable confirmedList={data.client_items.confirmed} />
          )}
        </TabCustomPanel>
      </TabContext>
    </Box>
  );
};

export default Orders;
