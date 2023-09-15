import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants';
import { Paths } from '@/enums';
import { resume } from '@/stores';
import { useNavigate, useParams } from '@solidjs/router';
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@suid/material';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinIcon } from 'solid-icons/ai';
import { IoDocumentTextSharp as DocumentIcon } from 'solid-icons/io';
import type { Component } from 'solid-js';

import IconButton from '../../IconButton';

interface Props {
  direction?: 'row' | 'column';
  disableProjects?: boolean;
}

const Navlinks: Component<Props> = ({ direction = 'row', disableProjects = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const onProjectsClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    navigate(Paths.projects);
  };

  return (
    <Stack direction={direction} alignItems="center" spacing={direction === 'column' ? 3 : 1}>
      {!disableProjects && (
        <Paper sx={{ padding: 1 }}>
          <Button onClick={onProjectsClick}>
            <Typography variant={isAboveMD() ? 'body1' : 'subtitle1'} textTransform="none">
              Projects
            </Typography>
          </Button>
        </Paper>
      )}
      <Stack direction="row" spacing={1}>
        <Paper>
          {resume() ? (
            <IconButton href={resume()} target="_blank">
              <DocumentIcon fill={theme.palette.text.primary} />
            </IconButton>
          ) : (
            <IconButton>
              <CircularProgress size={20} />
            </IconButton>
          )}
        </Paper>
        <Paper>
          <IconButton href={GITHUB_LINK} target="_blank">
            <GithubIcon fill={theme.palette.text.primary} />
          </IconButton>
        </Paper>
        <Paper>
          <IconButton href={LINKEDIN_LINK} target="_blank">
            <LinkedinIcon fill={theme.palette.text.primary} />
          </IconButton>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Navlinks;
