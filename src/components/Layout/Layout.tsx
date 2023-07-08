import { Box, Stack, useMediaQuery, useTheme } from '@suid/material';
import { type Component, JSX } from 'solid-js';

interface Props {
  children?: JSX.Element;
}

const Layout: Component<Props> = ({ children }) => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack
      direction="column"
      sx={{
        background: theme.palette.background.default,
        width: '100%',
        minHeight: '100vh',
        p: isAboveMD() ? 15 : 5
      }}
    >
      {/* <Box class="ocean">
        <Box class="wave" />
        <Box class="wave" />
      </Box> */}
      {children}
    </Stack>
  );
};

export default Layout;