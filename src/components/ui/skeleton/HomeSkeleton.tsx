import { Box, Skeleton, SkeletonProps } from "@mui/material";

const HomeSkeleton = ({ animation }: SkeletonProps) => {
  return (
      <Box display="grid" gap={6} mt={6}>
        <Skeleton animation={animation} variant="rounded" height={120} />
        <Skeleton animation={animation} variant="rounded" height={120} />
        <Skeleton animation={animation} variant="rounded" height={120} />
        <Skeleton animation={animation} variant="rounded" height={120} />
      </Box>
  );
};

export default HomeSkeleton;
