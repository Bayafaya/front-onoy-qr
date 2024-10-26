import React, { FC } from "react";
import OptionCard from "../../../components/ui/cards/OptionCard";
import FoodRequireTag from "../../../components/ui/tags/FoodRequireTag";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

type OptionsWidgetsProps = {
  active?: boolean;
};

const OptionsWidgets: FC<OptionsWidgetsProps> = ({ active = false }) => {
  const theme = useTheme();
  return (
    <OptionCard active={active}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h1" fontWeight={600}>
          Опции
        </Typography>
        <FoodRequireTag active={active}>{active ? "Обязательно" : "Выбрано"}</FoodRequireTag>
      </Box>
      <Typography variant="body2" fontWeight={500} mb={3}>
        Выбери 1
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
                color={theme.palette.primary.main}
                fontWeight={600}
              >
                445 с
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
                color={theme.palette.primary.main}
                fontWeight={600}
              >
                445 с
              </Typography>
            </Box>
          }
        />
      </FormGroup>
    </OptionCard>
  );
};

export default OptionsWidgets;
