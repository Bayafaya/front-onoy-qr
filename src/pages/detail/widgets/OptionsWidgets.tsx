import OptionCard from "../../../components/ui/cards/OptionCard";
import FoodRequireTag from "../../../components/ui/tags/FoodRequireTag";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioProps,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { IFoodOptions } from "../../../interfaces/food";
import CheckedIcon from "../../../assets/ui/CheckedIcon";
import NonCheckedIcon from "../../../assets/ui/NonCheckedIcon";

type OptionsWidgetsProps = {
  active?: boolean;
  foodOptions: IFoodOptions[];
  setSelectedOption: (option: IFoodOptions) => void;
  selectedOption: IFoodOptions;

};

const OptionsWidgets = ({
  active = false,
  foodOptions,
  setSelectedOption,
  selectedOption,
}: OptionsWidgetsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    const option = foodOptions.find((option) => option.option_name === value);
    setSelectedOption(option as IFoodOptions);
  };

  return (
    <OptionCard active={active}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h1" fontWeight={600}>
          Опции
        </Typography>
        <FoodRequireTag active={active}>
          {active ? "Обязательно" : "Выбрано"}
        </FoodRequireTag>
      </Box>
      <Typography variant="body2" fontWeight={500} mb={3}>
        Выбери 1
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          sx={{ width: "100%" }}
          value={selectedOption.option_name || ""}
          onChange={handleChange}
        >
          {foodOptions.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<BpRadio />}
              value={option.option_name}
              sx={{
                width: "100%",
                "& .MuiFormControlLabel-label": {
                  width: "100%",
                },
              }}
              label={
                <Label id={option.id} option_name={option.option_name} cost={option.cost} />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </OptionCard>
  );
};

export default OptionsWidgets;

function BpRadio(props: RadioProps) {
  const theme = useTheme();
  return (
    <Radio
      disableRipple
      color="default"
      sx={{ paddingX: 3 }}
      checkedIcon={<CheckedIcon color={theme.palette.primary.main} />}
      icon={<NonCheckedIcon color={theme.palette.primary.main} />}
      {...props}
    />
  );
}

const Label = ({ option_name, cost }: IFoodOptions) => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h5" fontWeight={400}>
        {option_name}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{
          transition: "all 0.3s",
        }}
        fontWeight={600}
      >
        {cost} c
      </Typography>
    </Box>
  );
};
