import { Box, Grid2, Typography } from "@mui/material";
import GlobeIcon from "../../assets/ui/GlobeIcon";
import ButtonBlurIcon from "../../components/ui/buttons/ButtonBlurIcon";
import ButtonBlur from "../../components/ui/buttons/ButtonBlur";
import OnoyLogo from "../../assets/OnoyLogo";
import { useNavigate } from "react-router";

const mainGrid = {
  position: "absolute",
  top: "42%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  display: "grid",
  placeItems: "center",
};

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <Grid2 sx={{ position: "relative", height: "100%", width: "100%" }}>
      <Box sx={{ position: "absolute", right: 0 }}>
        <ButtonBlurIcon>
          <GlobeIcon color="white" width={28} height={28} />
        </ButtonBlurIcon>
      </Box>
      <Grid2 sx={mainGrid}>
        <img
          src="src/assets/welcome/navat.png"
          alt="brand logo"
          style={{ width: "320px" }}
        />
        <ButtonBlur
          sx={{
            fontSize: "1.2rem",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            width: "240px",
            paddingY: "8px",
          }}
          onClick={() => navigate("/")}
        >
          начать заказ
        </ButtonBlur>
      </Grid2>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 0%)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <OnoyLogo width={60} height={60} />
        <Typography>ONOY - Упрощай каждый шаг</Typography>
      </Box>
    </Grid2>
  );
};

export default Welcome;
