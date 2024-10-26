import { useTheme } from "@emotion/react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  Typography,
} from "@mui/material";

const AdditionalWidget = () => {
  const theme = useTheme();
  return (
    <Grid2
      sx={{
        height: "100%",
        width: "100%",
        padding: "16px",
        position: "relative",
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        Добавки
      </Typography>
      <FormGroup>
        <FormControlLabel
          slotProps={{ typography: { width: "100%" } }}
          control={<Checkbox defaultChecked />}
          label={
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight={400}>
                Большой
              </Typography>
              <Typography
                variant="h5"
                color={theme.palette.primary.contrastText}
                fontWeight={400}
              >
                45 с
              </Typography>
            </Box>
          }
        />
        <FormControlLabel
          slotProps={{ typography: { width: "100%" } }}
          control={<Checkbox />}
          label={
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight={400}>
                Маленький
              </Typography>
              <Typography
                variant="h5"
                color={theme.palette.primary.contrastText}
                fontWeight={400}
              >
                25 с
              </Typography>
            </Box>
          }
        />
      </FormGroup>
    </Grid2>
  );
};

export default AdditionalWidget;
