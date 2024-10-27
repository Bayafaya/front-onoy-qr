import { Grid2, Typography } from "@mui/material";
import ButtonBlurIcon from "../../../components/ui/buttons/ButtonBlurIcon";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import GlobeIcon from "../../../assets/ui/GlobeIcon";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";

const NavHead = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
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
            fontSize: "28px",
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
      <ButtonBlurIcon>
        <GlobeIcon width={28} height={28} color={theme.palette.white} />
      </ButtonBlurIcon>
    </Grid2>
  );
};

export default NavHead;
