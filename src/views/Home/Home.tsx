import { getCurrentPosition, getProjects } from '@/api';
import { getPreviousCareers } from '@/api/previously';
import { GradientText, ProjectCard } from '@/components';
import { Box, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@suid/material';
import { For, createResource } from 'solid-js';

import CurrentPositionSkeleton from './CurrentPositionSkeleton';
import PreviousCareersSkeleton from './PreviousCareersSkeleton';
import ProjectsSkeleton from './ProjectsSkeleton';

const Home = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const [currentPosition] = createResource(getCurrentPosition);
  const [previousCareers] = createResource(getPreviousCareers);
  const [projects] = createResource(getProjects);

  return (
    <Stack direction="column">
      <Stack direction="column" spacing={3} height={isAboveMD() ? '80vh' : '100vh'} pt={10}>
        <Box class="gradient-border" height="50vh">
          <Stack direction="column" justifyContent="center" height="100%" p={5} spacing={5}>
            <Stack direction="column">
              <Typography variant="h1">👋 Hi! I'm Jason</Typography>
              {currentPosition() ? (
                <Typography variant="body1">{currentPosition()}</Typography>
              ) : (
                <CurrentPositionSkeleton />
              )}
            </Stack>
            <Stack direction="column" spacing={0}>
              <Typography variant="h2" pt={2}>
                Previously
              </Typography>
              <For each={previousCareers()} fallback={<PreviousCareersSkeleton />}>
                {({ title, company }) => (
                  <Typography variant="body1">
                    {title} @ {company}
                  </Typography>
                )}
              </For>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack direction="column" id="projects" minHeight="100vh" pb={10}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <For each={projects()} fallback={<ProjectsSkeleton />}>
              {(project) => (
                <Grid item sm={12} md={6} lg={4}>
                  <ProjectCard project={project} />
                </Grid>
              )}
            </For>
          </Grid>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
