import { Typography } from '@suid/material';
import { TypographyTypeMap } from '@suid/material/Typography';
import { InPropsOf, OverridableComponent } from '@suid/types';
import { Component } from 'solid-js';

interface Props extends Partial<InPropsOf<TypographyTypeMap>> {
  text?: string;
}

const GradientText: Component<Props> = ({ text, ...other }) => {
  return (
    <Typography
      {...other}
      sx={{
        textTransform: 'uppercase',
        backgroundColor: '#2a2a72',
        background: 'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {text}
    </Typography>
  );
};

export default GradientText;
