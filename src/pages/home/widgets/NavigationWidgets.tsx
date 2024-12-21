import { Badge, Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../../components/ui/buttons/ButtonFillIcon";
import FoodIcon from "../../../assets/ui/FoodIcon";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import LangButton from "../../../components/ui/buttons/LangButton";
import { useCountOfOrder } from "../../../hooks/useCountOfOrder";

const NavigationWidgets = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { countOfOrder } = useCountOfOrder();

  return (
    <Box display="grid" gap={8}>
      <Grid2 display="flex" alignItems="center" justifyContent="space-between">
        <LangButton />
        <Typography
          variant="h1"
          textTransform="uppercase"
          color={theme.palette.primary.contrastText}
        >
          ONOY
        </Typography>
        <Badge badgeContent={countOfOrder} color="error" max={50}>
          <ButtonFillIcon onClick={() => navigate("/orders")}>
            <FoodIcon width={28} height={28} color={theme.palette.white} />
          </ButtonFillIcon>
        </Badge>
      </Grid2>
    </Box>
  );
};

export default NavigationWidgets;
