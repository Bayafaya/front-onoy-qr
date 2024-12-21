import { Grid2, Typography } from "@mui/material";
import ButtonBlurIcon from "../../../components/ui/buttons/ButtonBlurIcon";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import LangButton from "../../../components/ui/buttons/LangButton";

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
        ONOY
      </Typography>
      <LangButton blur />
    </Grid2>
  );
};

export default NavHead;
