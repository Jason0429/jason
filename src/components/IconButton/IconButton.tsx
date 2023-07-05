import { Box, Link, IconButton as MUIIconButton } from '@suid/material';
import { SxProps } from '@suid/system';
import { Component, JSX } from 'solid-js';

interface Props {
  children: JSX.Element;
  href?: string;
  openNewTab?: boolean;
  target?: string;
  height?: number | string;
  width?: number | string;
  sx?: SxProps;
}

const IconButton: Component<Props> = ({
  children,
  href,
  openNewTab = false,
  target,
  height = 50,
  width = 50,
  sx
}) => {
  return (
    <Link href={href} target={openNewTab ? '_blank' : target}>
      <MUIIconButton sx={{ position: 'relative', width, height, ...sx }}>
        <Box
          sx={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {children}
        </Box>
      </MUIIconButton>
    </Link>
  );
};

export default IconButton;
