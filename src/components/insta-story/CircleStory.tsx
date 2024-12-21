import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography, styled } from "@mui/material";

const CircleBox = styled(Box)`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 2px;
  border-radius: 100%;
  width: fit-content;
`;

const CircleStory = ({
  onOpen,
  poster,
}: {
  onOpen: () => void;
  poster?: string;
}) => {
  const theme = useTheme();
  return (
    <Box display="grid" justifyContent="center" width="fit-content">
      <CircleBox>
        <Avatar
          onClick={() => onOpen()}
          sx={{ height: 64, width: 64 }}
          alt="story"
          src={poster}
        />
      </CircleBox>
      <Typography
        variant="h6"
        color={theme.palette.primary.main}
        textAlign="center"
        mt={1}
      >
        Ации
      </Typography>
    </Box>
  );
};

export default CircleStory;
