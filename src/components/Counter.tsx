import { Box, IconButton, Typography } from "@mui/material";
import MinusIcon from "../assets/ui/MinusIcon";
import PlusIcon from "../assets/ui/PlusIcon";
import { useTheme } from "@emotion/react";

type CounterProps = {
  size?: number;
  count: number;
  setCount: (count: number) => void;
};

const Counter = ({ size = 16, count, setCount }: CounterProps) => {
  const theme = useTheme();

  const decrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  const increment = () => {
    if (count >= 50) return;
    setCount(count + 1);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton
        onClick={decrement}
        sx={{
          border: `1px solid ${theme.palette.secondary.contrastText}`,
        }}
      >
        <MinusIcon width={size} height={size} />
      </IconButton>
      <Typography
        variant={size === 8 ? "h5" : "h3"}
        color={theme.palette.gray}
        textAlign="center"
        width="30px"
        sx={{
          pointerEvents: "none",
        }}
      >
        {count}
      </Typography>
      <IconButton
        onClick={increment}
        sx={{
          border: `1px solid ${theme.palette.secondary.contrastText}`,
        }}
      >
        <PlusIcon width={size} height={size} />
      </IconButton>
    </Box>
  );
};

export default Counter;
