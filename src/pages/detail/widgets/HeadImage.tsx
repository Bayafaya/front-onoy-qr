import { Box, Grid2 } from "@mui/material";
import { FC } from "react";

type HeadImageProps = {
    url: string;
};

const HeadImage: FC<HeadImageProps> = ({
    url
}) => {
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
      <img
        src={url}
        alt={"food item"}
        style={{ width: "100%", height: "100%" }}
      />
    </Grid2>
  );
};

export default HeadImage;
