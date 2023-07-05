import { Stack, Typography } from '@suid/material';
import { Component } from 'solid-js';

interface Props {}

const Page404: Component<Props> = () => {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography>404 | Not Found</Typography>
    </Stack>
  );
};

export default Page404;
