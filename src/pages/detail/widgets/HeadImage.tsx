import { Box, Grid2 } from "@mui/material";
import { FC } from "react";
import { useTheme } from "@emotion/react";

type HeadImageProps = {
  url: string;
};

const HeadImage: FC<HeadImageProps> = ({ url }) => {
  const theme = useTheme();
  return (
    <Grid2 position="absolute" top="0" left="0" width="100%" height="250px">
      <Box
        position="absolute"
        top="-80px"
        left="0"
        width="100%"
        height={"180px"}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 76%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      {url ? (
        <img
          src={url}
          alt={"food item"}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.grey[400],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      )}
    </Grid2>
  );
};

export default HeadImage;
