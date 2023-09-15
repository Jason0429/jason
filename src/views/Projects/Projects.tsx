import { Navbar, ProjectCard } from '@/components';
import { projects } from '@/stores';
import { Box, Grid, Stack, Typography, useTheme } from '@suid/material';
import { Component, For } from 'solid-js';

import ProjectsSkeleton from './ProjectsSkeleton';

const Projects: Component = () => {
  const theme = useTheme();

  return (
    <>
      <Navbar disableProjects />
      <Stack direction="column" id="projects" minHeight="100vh" pb={10}>
        <Stack textAlign="center" p={5}>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            My Projects
          </Typography>
        </Stack>
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
    </>
  );
};

export default Projects;
