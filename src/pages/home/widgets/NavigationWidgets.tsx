import { Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../../components/ui/buttons/ButtonFillIcon";
import FoodIcon from "../../../assets/ui/FoodIcon";
import SearchInput from "../../../components/ui/inputs/SearchInput";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import LangButton from "../../../components/ui/buttons/LangButton";
import { useTranslation } from "react-i18next";

const NavigationWidgets = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box display="grid" gap={8} mb={6}>
      <Grid2 display="flex" alignItems="center" justifyContent="space-between">
        <LangButton />
        <Typography
          variant="h1"
          textTransform="uppercase"
          color={theme.palette.primary.contrastText}
        >
          navat
        </Typography>
        <ButtonFillIcon onClick={() => navigate("/orders")}>
          <FoodIcon width={28} height={28} color={theme.palette.white} />
        </ButtonFillIcon>
      </Grid2>
      <SearchInput placeholder={t("foodSearch")} />
    </Box>
  );
};

export default NavigationWidgets;
