import { IconButton } from '@/components';
import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants';
import { Box, Container, Link, Paper, Stack, useMediaQuery, useTheme } from '@suid/material';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinIcon } from 'solid-icons/ai';
import { IoDocumentTextSharp as DocumentIcon } from 'solid-icons/io';
import { Component } from 'solid-js';

const SPACE_FROM_EDGE = 15;

interface Props {}

const Navbar: Component<Props> = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Paper
      class="gradient-border-green"
      elevation={0}
      sx={{
        px: isAboveMD() ? 1 : 2,
        py: isAboveMD() ? 2 : 1,
        position: 'fixed',
        left: isAboveMD() ? undefined : '50%',
        top: isAboveMD() ? '50%' : undefined,
        right: isAboveMD() ? SPACE_FROM_EDGE : undefined,
        bottom: isAboveMD() ? undefined : SPACE_FROM_EDGE,
        transform: isAboveMD() ? 'translateY(-50%)' : 'translateX(-50%)',
        background: theme.palette.background.default
      }}
    >
      <Stack direction={isAboveMD() ? 'column' : 'row'} alignItems="center" spacing={2}>
        <IconButton href={GITHUB_LINK} openNewTab>
          <GithubIcon style={{ fill: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href={LINKEDIN_LINK} openNewTab>
          <LinkedinIcon style={{ fill: theme.palette.text.primary }} />
        </IconButton>
        <IconButton openNewTab>
          <DocumentIcon style={{ fill: theme.palette.text.primary }} />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default Navbar;
