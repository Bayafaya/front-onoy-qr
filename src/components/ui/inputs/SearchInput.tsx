import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import SearchIcon from "../../../assets/ui/SearchIcon";
import { useTheme } from "@emotion/react";

const SearchInput: FC<TextFieldProps> = (props) => {
  const theme = useTheme();

  return (
    <TextField
      {...props}
      fullWidth
      slotProps={{
        input: {
          sx: {
            fontSize: theme.typography.h1.fontSize,
            fontWeight: 400,
            height: "48px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                width={22}
                height={22}
                color={theme.palette.primary.main}
              />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
      sx={{
        bgcolor: theme.palette.secondary.main,
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
        },
      }}
    />
  );
};

export default SearchInput;
