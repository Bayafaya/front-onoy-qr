import { useTheme } from "@emotion/react";
import { Grid2, Typography } from "@mui/material";
import { FC } from "react";

type NameAndPriceProps = {
  name: string;
  price: string;
};

const NameAndPrice: FC<NameAndPriceProps> = ({ name, price }) => {
  const theme = useTheme();
  return (
    <Grid2 display="grid" paddingTop={"24px"}>
      <Typography variant="h3">{name}</Typography>
      <Typography
        variant="h3"
        fontWeight={700}
        color={theme.palette.primary.main}
      >
        {price}
      </Typography>
    </Grid2>
  );
};

export default NameAndPrice;
