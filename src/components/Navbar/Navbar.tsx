import { getResumeLink } from '@/api/resume';
import { IconButton } from '@/components';
import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants';
import { CircularProgress, Paper, Skeleton, Stack, useMediaQuery, useTheme } from '@suid/material';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinIcon } from 'solid-icons/ai';
import { IoDocumentTextSharp as DocumentIcon } from 'solid-icons/io';
import { Component, createEffect, createResource, on, onMount } from 'solid-js';

const SPACE_FROM_EDGE = 15;

interface Props {}

const Navbar: Component<Props> = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const [resumeLink] = createResource(getResumeLink);

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
        <IconButton href={GITHUB_LINK} target="_blank">
          <GithubIcon style={{ fill: theme.palette.text.primary }} />
        </IconButton>
        <IconButton href={LINKEDIN_LINK} target="_blank">
          <LinkedinIcon style={{ fill: theme.palette.text.primary }} />
        </IconButton>
        {resumeLink() ? (
          <IconButton href={resumeLink()} target="_blank">
            <DocumentIcon style={{ fill: theme.palette.text.primary }} />
          </IconButton>
        ) : (
          <CircularProgress sx={{ height: 25, width: 25 }} />
        )}
      </Stack>
    </Paper>
  );
};

export default Navbar;
