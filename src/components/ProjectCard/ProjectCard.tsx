import IconButton from "@/components/IconButton";
import { Project } from "@/types";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useTheme
} from "@suid/material";
import { AiFillGithub as GithubIcon } from "solid-icons/ai";
import { CgWebsite as WebsiteIcon } from "solid-icons/cg";
import { Component, For } from "solid-js";

const CARD_HEIGHT = "350px";
const CIRCLE_SIZE: [number, number] = [20, 50];
const RECT_SIZE: [number, number] = [30, 100];

interface Props {
  project?: Project;
}

const ProjectCard: Component<Props> = ({ project }) => {
  const theme = useTheme();

  if (project) {
    const { title, desc, languages, github, website } = project;

    return (
      <Paper
        sx={{
          border: "1px solid #E0E0E080"
        }}
      >
        <Card
          sx={{
            height: CARD_HEIGHT,
            width: "100%"
          }}
        >
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6">{title}</Typography>
                <Divider />
              </Stack>
              <Typography variant="body2">{desc}</Typography>
              <Stack
                direction="row"
                sx={{
                  flexWrap: "wrap",
                  gap: 1,
                  maxWidth: "100%"
                }}
              >
                <For each={languages}>
                  {(language) => (
                    <Chip
                      label={language}
                      variant="outlined"
                      size="small"
                      sx={{
                        // fontSize: '0.75rem',
                        fontWeight: 500,
                        borderColor: theme.palette.text.secondary,
                        color: theme.palette.text.secondary
                      }}
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
      </Paper>
    );
  }

  return (
    <Paper>
      <Card
        sx={{
          height: CARD_HEIGHT,
          width: "100%"
        }}
      >
        <CardContent>
          <Stack direction="column" spacing={2}>
            <Stack direction="column" spacing={1}>
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
            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 1,
                maxWidth: "100%"
              }}
            >
              <For each={Array(6)}>
                {() => (
                  <Skeleton
                    variant="rectangular"
                    height={CIRCLE_SIZE[0]}
                    width={CIRCLE_SIZE[1]}
                    sx={{
                      borderRadius: 10
                    }}
                  />
                )}
              </For>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Skeleton
                variant="rectangular"
                height={RECT_SIZE[0]}
                width={RECT_SIZE[1]}
              />
              <Skeleton
                variant="rectangular"
                height={RECT_SIZE[0]}
                width={RECT_SIZE[1]}
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ProjectCard;
