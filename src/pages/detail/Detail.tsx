import { Box, Grid2, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import ButtonBlurIcon from "../../components/ui/buttons/ButtonBlurIcon";
import GlobeIcon from "../../assets/ui/GlobeIcon";
import { useTheme } from "@emotion/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const Detail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box>
      <Grid2 position="absolute" top="0" left="0" width="100%" height="250px">
        <Box
          position="absolute"
          top="-80px"
          left="0"
          width="100%"
          height={"180px"}
          sx={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 76%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <img
          src="/src/assets/images.jpg"
          alt={"food item"}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid2>
      <Grid2
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={"184px"}
      >
        <ButtonBlurIcon onClick={() => navigate(-1)}>
          <ArrowBackIosRoundedIcon
            sx={{
              color: theme.palette.white,
            }}
          />
        </ButtonBlurIcon>
        <Typography
          variant="h1"
          textTransform="uppercase"
          color={theme.palette.white}
          zIndex={1}
        >
          Navat
        </Typography>
        <ButtonBlurIcon >
          <GlobeIcon width={28} height={28} color={theme.palette.white} />
        </ButtonBlurIcon>
      </Grid2>
      <Grid2 display="grid" paddingTop={"24px"}>
        <Typography variant="h3">Beef, vegetables</Typography>
        <Typography variant="h3" fontWeight={700} color={theme.palette.primary.main}>350 с</Typography>
      </Grid2>
        <Typography variant="h5" fontWeight={400} color={theme.palette.secondary.contrastText} my={6}>Seeds isolated on white background Apple t IPhone 14 Pro & iPhone 14 Pro Max masdasd </Typography>
    </Box>
  );
};

export default Detail;
