import { getProjects } from '@/api';
import { ProjectCard } from '@/components';
import { Box, Grid, Stack, useMediaQuery, useTheme } from '@suid/material';
import { For, createResource } from 'solid-js';

import IntroCard from './IntroCard';
import ProjectsSkeleton from './ProjectsSkeleton';

const Home = () => {
  const theme = useTheme();
  const isAboveMD = useMediaQuery(theme.breakpoints.up('md'));

  const [projects] = createResource(getProjects);

  return (
    <Stack direction="column" py={2}>
      <Stack direction="column" height="100vh" pb={isAboveMD() ? 5 : 15}>
        <IntroCard />
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
