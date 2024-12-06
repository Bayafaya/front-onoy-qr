import { Box, Skeleton, SkeletonProps } from "@mui/material";

const BasketSkeleton = ({ animation }: SkeletonProps) => {
  return (
    <Box display="grid">
      <Skeleton animation={animation} variant="rounded" height={76} />
    </Box>
  );
};

export default BasketSkeleton;
