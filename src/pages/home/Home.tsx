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
import HomeSkeleton from "../../components/ui/skeleton/HomeSkeleton";
import TabSkeleton from "../../components/ui/skeleton/TabSkeleton";

const Home = () => {
  const { category, isLoading } = useCategory();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("0");
  const { data, isLoading: isLoadingProducts } = useAllIFoods({
    category,
    tab,
  });

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());
  };

  return (
    <Box>
      <NavigationWidgets />
      {isLoading ? (
        <TabSkeleton animation="wave" />
      ) : (
        <TabContext value={tab}>
          <FoodTabsWidgets
            value={+tab}
            tabList={category}
            onChange={handleChange}
          />
          {isLoadingProducts ? (
            <HomeSkeleton animation="wave" />
          ) : (
            category.map((item, index) => (
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
            ))
          )}
        </TabContext>
      )}
    </Box>
  );
};

export default Home;
