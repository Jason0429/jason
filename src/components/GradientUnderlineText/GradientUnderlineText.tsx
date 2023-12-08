import { Box, Stack, Typography } from '@suid/material';
import { TypographyPropsVariantOverrides } from '@suid/material/Typography';
import { Variant } from '@suid/material/styles/createTypography';
import { SxProps } from '@suid/system';
import { OverridableStringUnion } from '@suid/types';
import { Component } from 'solid-js';

interface Props {
  text?: string;
  underlineHeight?: number | string;
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
  sx?: SxProps;
}

const GradientUnderlineText: Component<Props> = ({
  text,
  underlineHeight = 2,
  variant = 'h1',
  sx
}) => {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant={variant} sx={sx}>
        {text}
      </Typography>
      <Box
        sx={{
          backgroundColor: '#abe9cd',
          backgroundImage: 'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
          height: underlineHeight,
          borderRadius: '5px',
          width: '100%'
        }}
      />
    </Stack>
  );
};

export default GradientUnderlineText;
