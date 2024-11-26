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
import { useNavigate, useParams } from "react-router";
import useSingleFood from "../../hooks/useSingleFood";
import { toBucket } from "../../services/bucket";

const Detail = () => {
  const navigate = useNavigate();
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

  const addToBucket = async () => {
    const access = localStorage.getItem("access");
    const client_id = localStorage.getItem("client_id");
    try {
      const response = await toBucket({
        qr_code_id: access || "",
        client_id: client_id || "",
        body: {
          items: [
            {
              id: food.pk,
              option: selectedOption.id,
              modifier: selectedModifier.map((modifier) => modifier.id),
              count: count,
            },
          ],
          discount: 0,
        },
      });
      if (response.status === 200) {
        localStorage.setItem("client_id", response.data.client_id);
        navigate(-1);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          active={selectedOption.option_name ? false : true}
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
          <Counter count={count} setCount={setCount} />
          <AccentButton onClick={addToBucket}>Add to card</AccentButton>
        </Box>
      </BottomFloatCard>
    </Box>
  );
};
export default Detail;
