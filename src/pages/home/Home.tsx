import { Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../components/ui/buttons/ButtonFillIcon";
import GlobeIcon from "../../assets/ui/GlobeIcon";
import { useTheme } from "@emotion/react";
import FoodIcon from "../../assets/ui/FoodIcon";
import { useNavigate } from "react-router";
import SearchInput from "../../components/ui/inputs/SearchInput";
import FoodTabsWidgets from "./widgets/FoodTabsWidgets";
import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";


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
  const theme = useTheme();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue.toString());  
  };


  return (
    <Box>
      <Box display="grid" gap={8} mb={6}>
        <Grid2
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <ButtonFillIcon>
            <GlobeIcon width={28} height={28} color={theme.palette.white} />
          </ButtonFillIcon>
          <Typography
            variant="h1"
            textTransform="uppercase"
            color={theme.palette.primary.contrastText}
          >
            Navat
          </Typography>
          <ButtonFillIcon onClick={() => navigate("/orders")}>
            <FoodIcon width={28} height={28} color={theme.palette.white} />
          </ButtonFillIcon>
        </Grid2>
        <SearchInput placeholder="Search Food" />
      </Box>
      <TabContext value={tab}>
        <FoodTabsWidgets value={+tab} tabList={tabList} onChange={handleChange} />
        <TabPanel value={"0"} >Item One</TabPanel>
        <TabPanel value={"1"} >Item two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Home;
