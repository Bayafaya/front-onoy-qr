import { Box, IconButton, Typography } from "@mui/material";
import MinusIcon from "../assets/ui/MinusIcon";
import PlusIcon from "../assets/ui/PlusIcon";
import { useTheme } from "@emotion/react";
import TrashIcon from "../assets/ui/TrashIcon";

type CounterProps = {
  size?: number;
  count: number;
  setCount: (count: number) => void;
  showDeleteButton?: boolean;
};

const Counter = ({
  size = 16,
  count,
  setCount,
  showDeleteButton,
}: CounterProps) => {
  const theme = useTheme();

  const decrement = () => {
    if (showDeleteButton && count === 1) {
      setCount(0);
      return;
    }
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
          padding: count ? "8px" : "6px",
        }}
      >
        {count ? (
          <MinusIcon width={size} height={size} />
        ) : (
          <TrashIcon width={12} height={12} />
        )}
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
