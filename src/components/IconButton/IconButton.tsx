import { Box, Link, IconButton as MUIIconButton } from '@suid/material';
import { SxProps } from '@suid/system';
import { Component, JSX } from 'solid-js';

interface Props {
  children: JSX.Element;
  href?: string;
  target?: string;
  height?: number | string;
  width?: number | string;
  sx?: SxProps;

  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
}

const IconButton: Component<Props> = ({
  children,
  href,
  target,
  height = 50,
  width = 50,
  sx,
  onClick
}) => {
  return (
    <Link href={href} target={target}>
      <MUIIconButton sx={{ position: 'relative', width, height, ...sx }} onClick={onClick}>
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
