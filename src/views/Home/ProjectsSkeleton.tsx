import { ProjectCard } from '@/components';
import { Grid } from '@suid/material';
import { For } from 'solid-js';

const ProjectsSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <For each={Array(10)} fallback={<ProjectsSkeleton />}>
        {() => (
          <Grid item sm={12} md={6} lg={4}>
            <ProjectCard />
          </Grid>
        )}
      </For>
    </Grid>
  );
};

export default ProjectsSkeleton;
