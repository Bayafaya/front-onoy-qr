import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import FoodTabsWidgets from "../../components/ui/tabs/FoodTabsWidgets";
import { useState } from "react";
import { TabContext } from "@mui/lab";
import ProductCard from "../../components/ui/cards/ProductCard";
import TabCustomPanel from "../../components/ui/tabs/TabCustomPanel";
import NavigationWidgets from "./widgets/NavigationWidgets";
import useAllIFoods from "../../hooks/useAllIFoods";

const tabList = [
  "Food",
  "Fruits",
  "Vegetables",
  "Grocery",
  "Drinks",
  "Snacks",
  "Alcohol",
];

const Home = () => {
  const { data } = useAllIFoods();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());
  };

  return (
    <Box>
      <NavigationWidgets />
      <TabContext value={tab}>
        <FoodTabsWidgets
          value={+tab}
          tabList={tabList}
          onChange={handleChange}
        />
        <TabCustomPanel value={"0"}>
          {data.map((item) => (
            <ProductCard
              key={item.pk}
              onClick={() => navigate(`/detail/${item.pk}`)}
              title={item.name}
              description={item.description}
              image={item.image_url}
            />
          ))}
        </TabCustomPanel>
        {/* <TabCustomPanel value={"1"}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </TabCustomPanel> */}
      </TabContext>
    </Box>
  );
};

export default Home;
