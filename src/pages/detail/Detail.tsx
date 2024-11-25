import { Box, Grid2 } from "@mui/material";
import DescriptionText from "./widgets/DescriptionText";
import NameAndPrice from "./widgets/NameAndPrice";
import HeadImage from "./widgets/HeadImage";
import NavHead from "./widgets/NavHead";
import OptionsWidgets from "./widgets/OptionsWidgets";
import AdditionalWidget from "./widgets/AdditionalWidget";
import BottomFloatCard from "../../components/ui/float/BottomFloatCard";
import Counter from "../../components/Counter";
import AccentButton from "../../components/ui/buttons/AccentButton";
import { useParams } from "react-router";
import useSingleFood from "../../hooks/useSingleFood";

const Detail = () => {
  const { id } = useParams();
  const {
    food,
    selectedOption,
    setSelectedOption,
    selectedModifier,
    setSelectedModifier,
    totalCost,
    count,
    setCount,
  } = useSingleFood({ id });

  return (
    <Box paddingBottom={14}>
      <HeadImage url={food.image_url} />
      <NavHead />
      <NameAndPrice
        name={food.name || "name"}
        price={`${totalCost || "0"} с`}
      />
      <DescriptionText text={food.description} />
      <Grid2 display="grid" gap={4}>
        <OptionsWidgets
          active={!!selectedOption.option_name ? false : true}
          foodOptions={food.options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Grid2>
      <AdditionalWidget
        foodModifiers={food.modifiers}
        selectedModifier={selectedModifier}
        setSelectedModifier={setSelectedModifier}
      />
      <BottomFloatCard>
        <Box display="flex" alignItems="center" gap={4}>
          <Counter count={count} setCount={setCount}/>
          <AccentButton>Add to card</AccentButton>
        </Box>
      </BottomFloatCard>
    </Box>
  );
};
export default Detail;
