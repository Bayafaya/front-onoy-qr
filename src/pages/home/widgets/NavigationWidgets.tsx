import { Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../../components/ui/buttons/ButtonFillIcon";
import FoodIcon from "../../../assets/ui/FoodIcon";
import GlobeIcon from "../../../assets/ui/GlobeIcon";
import SearchInput from "../../../components/ui/inputs/SearchInput";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

const NavigationWidgets = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <Box display="grid" gap={8} mb={6}>
      <Grid2 display="flex" alignItems="center" justifyContent="space-between">
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
  );
};

export default NavigationWidgets;
