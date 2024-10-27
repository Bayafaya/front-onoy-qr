import { Box, Grid2, Typography } from "@mui/material";
import ButtonFillIcon from "../../../components/ui/buttons/ButtonFillIcon";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import GlobeIcon from "../../../assets/ui/GlobeIcon";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

const NavigationOrders = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box display="grid" gap={8} mb={6}>
      <Grid2 display="flex" alignItems="center" justifyContent="space-between">
        <ButtonFillIcon onClick={() => navigate(-1)}>
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
          Navat
        </Typography>
        <ButtonFillIcon>
          <GlobeIcon width={28} height={28} color={theme.palette.white} />
        </ButtonFillIcon>
      </Grid2>
    </Box>
  );
};

export default NavigationOrders;
