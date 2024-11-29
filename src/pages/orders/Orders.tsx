import { Box } from "@mui/material";
import NavigationOrders from "./widgets/NavigationOrders";
import FoodTabsWidgets from "../../components/ui/tabs/FoodTabsWidgets";
import { useState } from "react";
import TabCustomPanel from "../../components/ui/tabs/TabCustomPanel";
import { TabContext } from "@mui/lab";
import Basket from "./widgets/Basket";
import MyTable from "./widgets/MyTable";

const tabList = ["Корзина", "Мой стол"];

const Orders = () => {
  const [tab, setTab] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());
  };

  return (
    <Box paddingBottom={18}>
      <NavigationOrders />
      <TabContext value={tab}>
        <FoodTabsWidgets
          order
          value={+tab}
          tabList={tabList}
          onChange={handleChange}
        />
        <TabCustomPanel value={"0"}>
          <Basket />
        </TabCustomPanel>
        <TabCustomPanel value={"1"}>
          <MyTable />
        </TabCustomPanel>
      </TabContext>
    </Box>
  );
};

export default Orders;
