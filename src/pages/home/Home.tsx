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
import StoriesWidget from "./widgets/StoriesWidget";
import useModal from "../../hooks/useModal";
import { Story } from "react-insta-stories/dist/interfaces";
import { useTranslation } from "react-i18next";
import SearchInput from "../../components/ui/inputs/SearchInput";

const stories: Story[] = [
  {
    url: "/static/banner-1.jpg",
  },
  {
    url: "/static/banner-2.jpg",
  },
];

const Home = () => {
  const { t } = useTranslation();
  const { category, isLoading } = useCategory();

  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
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
      <Box display="grid" gap={4}>
        <NavigationWidgets />
        <SearchInput placeholder={t("foodSearch")} />
        <StoriesWidget
          open={isOpen}
          handleClose={closeModal}
          stories={stories}
          handleOpen={openModal}
        />
      </Box>

      {isLoading ? (
        <TabSkeleton animation="wave" />
      ) : (
        <TabContext value={tab}>
          <FoodTabsWidgets
            value={+tab}
            tabList={category.map((item) => item.name)}
            onChange={handleChange}
          />
          {isLoadingProducts ? (
            <HomeSkeleton animation="wave" />
          ) : (
            category.map((item, index) => (
              <TabCustomPanel key={item._id} value={`${index}`}>
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
