import { Skeleton, Stack } from '@suid/material';

const PreviousCareersSkeleton = () => {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Skeleton variant="text" width={150} />
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={75} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" width={150} />
      </Stack>
    </Stack>
  );
};

export default PreviousCareersSkeleton;
