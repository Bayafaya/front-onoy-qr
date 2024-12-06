import { Box, Skeleton, SkeletonProps } from "@mui/material";

const DetailSkeleton = ({ animation }: SkeletonProps) => {
  return (
    <Box display="grid" gap={6} paddingTop={"24px"}>
      <Box display="grid" gap={2}>
        {" "}
        <Skeleton
          animation={animation}
          variant="rounded"
          height={32}
        />
        <Skeleton
          animation={animation}
          variant="rounded"
          height={32}
          width={120}
        />
      </Box>

      <Skeleton animation={animation} variant="rounded" height={28} />
      <Skeleton animation={animation} variant="rounded" height={140} />
      <Skeleton animation={animation} variant="rounded" height={140} />
    </Box>
  );
};

export default DetailSkeleton;
