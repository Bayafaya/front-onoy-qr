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

const mokText = `Seeds isolated on white background Apple IPhone 14 Pro & iPhone 14 Pro Max
      Seeds isolated on white background Apple t IPhone 14 Pro & iPhone 14 Pro
      Max Seeds isolated on white background Apple IPhone 14 Pro & iPhone 14 Pro Max
      Seeds isolated on white background Apple t IPhone 14 Pro & iPhone 14 Pro
      MaxSeeds isolated on white background Apple IPhone 14 Pro & iPhone 14 Pro Max
      Seeds isolated on white background Apple t IPhone 14 Pro & iPhone 14 Pro
      MaxSeeds isolated on white background Apple IPhone 14 Pro & iPhone 14 Pro Max
      Seeds isolated on white background Apple t IPhone 14 Pro & iPhone 14 Pro
      Max Seeds isolated on white background`;

const Detail = () => {
  return (
    <Box paddingBottom={14}>
      <HeadImage url="/src/assets/images.jpg" />
      <NavHead />
      <NameAndPrice name={"Beef, vegetables"} price={"350 с"} />
      <DescriptionText text={mokText} />
      <Grid2 display="grid" gap={4}>
        <OptionsWidgets active />
        <OptionsWidgets />
      </Grid2>
      <AdditionalWidget />
      <BottomFloatCard>
        <Box display="flex" alignItems="center" gap={4}>
          <Counter />
          <AccentButton>Add to card</AccentButton>
        </Box>
      </BottomFloatCard>
    </Box>
  );
};
export default Detail;
