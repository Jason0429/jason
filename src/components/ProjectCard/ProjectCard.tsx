import { GradientUnderlineText, IconButton } from '@/components';
import { Project } from '@/types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useTheme
} from '@suid/material';
import { AiFillGithub as GithubIcon } from 'solid-icons/ai';
import { CgWebsite as WebsiteIcon } from 'solid-icons/cg';
import { Component, For } from 'solid-js';

const CARD_HEIGHT = '20rem';
const CIRCLE_SIZE = 30;
const RECT_SIZE: [number, number] = [30, 100];

interface Props {
  project?: Project;
}

const ProjectCard: Component<Props> = ({ project }) => {
  const theme = useTheme();

  if (project) {
    const { title, desc, languages, github, website } = project;

    return (
      <Card
        class="gradient-border-blue"
        sx={{
          height: CARD_HEIGHT,
          width: '100%',
          background: theme.palette.background.default
        }}
      >
        <CardContent>
          <Stack direction="column" spacing={2}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h3">{title}</Typography>
              <Divider />
            </Stack>
            <Typography variant="subtitle1">{desc}</Typography>
            <Stack
              direction="row"
              sx={{
                flexWrap: 'wrap',
                gap: 1,
                maxWidth: '100%'
              }}
            >
              <For each={languages}>
                {(language) => (
                  <Chip
                    label={language}
                    variant="filled"
                    size="small"
                    sx={{ color: theme.palette.text.secondary }}
                  />
                )}
              </For>
            </Stack>
            <Stack direction="row" spacing={1}>
              {github && (
                <IconButton href={github} target="_blank">
                  <GithubIcon fill={theme.palette.text.primary} />
                </IconButton>
              )}
              {website && (
                <IconButton href={website} target="_blank">
                  <WebsiteIcon fill={theme.palette.text.primary} />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{ height: CARD_HEIGHT, background: theme.palette.background.default }}
      class="gradient-border-blue"
    >
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <Skeleton variant="text" width={150} />
              <Skeleton variant="text" width={65} />
            </Stack>
            <Divider />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={1}>
              <Skeleton variant="text" width={200} />
              <Skeleton variant="text" width={100} />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Skeleton variant="text" width={75} />
              <Skeleton variant="text" width={50} />
              <Skeleton variant="text" width={175} />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Skeleton variant="text" width={175} />
              <Skeleton variant="text" width={125} />
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" height={CIRCLE_SIZE} width={CIRCLE_SIZE} />
            <Skeleton variant="circular" height={CIRCLE_SIZE} width={CIRCLE_SIZE} />
            <Skeleton variant="circular" height={CIRCLE_SIZE} width={CIRCLE_SIZE} />
          </Stack>
          <Stack direction="row" spacing={2} pt={2}>
            <Skeleton variant="rectangular" height={RECT_SIZE[0]} width={RECT_SIZE[1]} />
            <Skeleton variant="rectangular" height={RECT_SIZE[0]} width={RECT_SIZE[1]} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
