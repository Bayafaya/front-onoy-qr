import { Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../../components/ui/buttons/ButtonFillIcon";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import LangButton from "../../../components/ui/buttons/LangButton";

const NavigationOrders = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box display="grid" gap={8} mb={6}>
      <Grid2 display="flex" alignItems="center" justifyContent="space-between">
        <ButtonFillIcon onClick={() => navigate("/")}>
          <ArrowBackIosRoundedIcon
            sx={{
              color: theme.palette.white,
              fontSize: "28px",
            }}
          />
        </ButtonFillIcon>
        <Typography
          variant="h1"
          textTransform="uppercase"
          color={theme.palette.primary.contrastText}
        >
          ONOY
        </Typography>
        <LangButton />
      </Grid2>
    </Box>
  );
};

export default NavigationOrders;
