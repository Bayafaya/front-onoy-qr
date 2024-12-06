import { Box, Skeleton, SkeletonProps } from "@mui/material";

const TabSkeleton = ({ animation }: SkeletonProps) => {
  return (
    <Box display="flex" alignItems="center" gap={6} mt={10}>
      <Skeleton
        animation={animation}
        variant="rounded"
        height={30}
        width={120}
      />
      <Skeleton
        animation={animation}
        variant="rounded"
        height={30}
        width={120}
      />
      <Skeleton
        animation={animation}
        variant="rounded"
        height={30}
        width={120}
      />
    </Box>
  );
};

export default TabSkeleton;
