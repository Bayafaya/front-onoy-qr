import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import FoodTabsWidgets from "../../components/ui/tabs/FoodTabsWidgets";
import { useState } from "react";
import { TabContext } from "@mui/lab";
import ProductCard from "../../components/ui/cards/ProductCard";
import TabCustomPanel from "../../components/ui/tabs/TabCustomPanel";
import NavigationWidgets from "./widgets/NavigationWidgets";
import useAllIFoods from "../../hooks/useAllIFoods";
import useCategory from "../../hooks/useCategory";

const Home = () => {
  const { category } = useCategory();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("0");
  const { data } = useAllIFoods({category, tab});

  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());
  };

  return (
    <Box>
      <NavigationWidgets />
      <TabContext value={tab}>
        <FoodTabsWidgets
          value={+tab}
          tabList={category}
          onChange={handleChange}
        />
        {category.map((item, index) => (
          <TabCustomPanel key={item} value={`${index}`}>
            {data.map((item) => (
              <ProductCard
                key={item.pk}
                onClick={() => navigate(`/detail/${item.pk}`)}
                title={item.name}
                description={item.description}
                image={item.image_url}
                cook_time={item.cook_time}
                cost={item.options[0].cost as number}
              />
            ))}
          </TabCustomPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Home;
