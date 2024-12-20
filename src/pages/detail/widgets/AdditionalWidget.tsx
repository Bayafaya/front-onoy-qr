import { useTheme } from "@emotion/react";
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  Grid2,
  Typography,
} from "@mui/material";
import { IFoodModifiers } from "../../../interfaces/food";
import CheckedIcon from "../../../assets/ui/CheckedIcon";
import NonCheckedIcon from "../../../assets/ui/NonCheckedIcon";
import { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";

type AdditionalWidgetProps = {
  foodModifiers: IFoodModifiers[];
  selectedModifier: IFoodModifiers[];
  setSelectedModifier: (modifier: IFoodModifiers[]) => void;
};

const AdditionalWidget = ({
  foodModifiers,
  selectedModifier,
  setSelectedModifier,
}: AdditionalWidgetProps) => {
  
  const { t } = useTranslation();
  const handleChange = (event: SyntheticEvent, checked: boolean) => {
    const value = (event.target as HTMLInputElement).value as string;
    const result = foodModifiers.find((modifier) => modifier.id === value);
    if (!result) return;
    if (checked) {
      setSelectedModifier([...selectedModifier, result]);
    } else {
      setSelectedModifier(
        selectedModifier.filter((modifier) => modifier.id !== value)
      );
    }
  };

  return (
    <Grid2
      sx={{
        height: "100%",
        width: "100%",
        padding: "16px",
        position: "relative",
      }}
    >
      <Typography variant="h1" fontWeight={600} mb={3}>
        {t("modifiers")}
      </Typography>
      <FormGroup>
        {foodModifiers.map((modifier, index) => (
          <FormControlLabel
            key={index}
            onChange={handleChange}
            slotProps={{ typography: { width: "100%" } }}
            control={<BpCheckBox />}
            value={modifier.id}
            label={
              <Label
                id={modifier.id}
                name={modifier.name}
                additional_cost={modifier.additional_cost}
              />
            }
          />
        ))}
      </FormGroup>
    </Grid2>
  );
};

export default AdditionalWidget;

const Label = ({ name, additional_cost }: IFoodModifiers) => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h5" fontWeight={400}>
        {name}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.primary.contrastText}
        sx={{
          transition: "all 0.3s",
        }}
        fontWeight={400}
      >
        {additional_cost} с
      </Typography>
    </Box>
  );
};

function BpCheckBox(props: CheckboxProps) {
  const theme = useTheme();
  return (
    <Checkbox
      sx={{ paddingX: 3 }}
      checkedIcon={<CheckedIcon color={theme.palette.primary.main} />}
      icon={<NonCheckedIcon color={theme.palette.primary.main} />}
      {...props}
    />
  );
}
