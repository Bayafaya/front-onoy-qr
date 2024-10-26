import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";

type DescriptionTextProps = {
  text: string;
};

const DescriptionText: FC<DescriptionTextProps> = ({ text }) => {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Typography
      variant="h5"
      onClick={showMore ? toggleShowMore : undefined}
      paddingBottom={showMore ? 4 : 0}
      sx={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: showMore ? 0 : 2,
        position: "relative",
      }}
      fontWeight={400}
      color={theme.palette.secondary.contrastText}
      my={6}
    >
      {text}
      <Button
        onClick={toggleShowMore}
        sx={{
          paddingY: 0,
          paddingLeft: showMore ? 0 : 2,
          paddingRight: 0,
          borderRadius: "500px",
          position: "absolute",
          bottom: showMore ? 0 : 2,
          right: showMore ? "unset" : 2,
          left: showMore ? 0 : "unset",
          minWidth: 0,
          height: "12px",
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: theme.palette.secondary.contrastText,
          }}
        >
          {showMore ? "Show less" : "...more"}
        </Typography>
      </Button>
    </Typography>
  );
};

export default DescriptionText;
