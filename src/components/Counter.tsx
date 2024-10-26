import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MinusIcon from "../assets/ui/MinusIcon";
import PlusIcon from "../assets/ui/PlusIcon";
import { useTheme } from "@emotion/react";

const Counter = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    if (count >= 50) return;
    setCount((prev) => prev + 1);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton
        onClick={decrement}
        sx={{
          border: `1px solid ${theme.palette.secondary.contrastText}`,
        }}
      >
        <MinusIcon width={10} height={10} />
      </IconButton>
      <Typography
        variant="h3"
        color={theme.palette.gray}
        textAlign="center"
        width="30px"
      >
        {count}
      </Typography>
      <IconButton
        onClick={increment}
        sx={{
          border: `1px solid ${theme.palette.secondary.contrastText}`,
        }}
      >
        <PlusIcon width={10} height={10} />
      </IconButton>
    </Box>
  );
};

export default Counter;
