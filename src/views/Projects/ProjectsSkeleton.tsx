import { ProjectCard } from '@/components';
import { Grid } from '@suid/material';
import { For } from 'solid-js';

const ProjectsSkeleton = () => {
  return (
    <For each={Array(10)}>
      {() => (
        <Grid item sm={12} md={6} lg={4}>
          <ProjectCard />
        </Grid>
      )}
    </For>
  );
};

export default ProjectsSkeleton;
