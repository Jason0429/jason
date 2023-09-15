import { getResumeLink } from '@/api/resume';
import { IconButton } from '@/components';
import { GITHUB_LINK, LINKEDIN_LINK } from '@/constants';
import { Paths } from '@/enums';
import { useNavigate } from '@solidjs/router';
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@suid/material';
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineMenu as MenuIcon
} from 'solid-icons/ai';
import { IoDocumentTextSharp as DocumentIcon } from 'solid-icons/io';
import { Component, createEffect, createResource, createSignal, on, onMount } from 'solid-js';

import Navlinks from './Navlinks';

export const NAVBAR_HEIGHT = 75;

interface Props {
  disableProjects?: boolean;
}

const Navbar: Component<Props> = ({ disableProjects = false }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const onLogoClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    navigate(Paths.home);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={NAVBAR_HEIGHT}
    >
      <Button onClick={onLogoClick}>
        <Typography variant={isAboveMD() ? 'h4' : 'h5'}>JASON CHEUNG</Typography>
      </Button>
      <Navlinks disableProjects={disableProjects} />
    </Stack>
  );
};

export default Navbar;
