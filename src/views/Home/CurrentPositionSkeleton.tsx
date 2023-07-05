import { Skeleton, Stack } from '@suid/material';

const CurrentPositionSkeleton = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={150} />
      <Skeleton variant="text" width={200} />
    </Stack>
  );
};

export default CurrentPositionSkeleton;
