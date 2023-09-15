import { getLatestVersion, getProjects, getResumeLink } from '@/api';
import { Layout } from '@/components';
import { LocalStorageKeys, Paths } from '@/enums';
import '@/index.css';
import { theme } from '@/theme';
import type { Project } from '@/types';
import { Route, Router, Routes } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';
import { type Component, lazy, onMount } from 'solid-js';

import { setProjects, setResume } from './stores';
import Projects from './views/Projects/Projects';

const Home = lazy(() => import('@/views/Home'));
const Page404 = lazy(() => import('@/views/Page404'));

const refetchProjects = async () => {
  const projects = await getProjects();
  localStorage.setItem(LocalStorageKeys.projects, JSON.stringify(projects));
  setProjects(projects);
};

const loadProjects = async () => {
  const projects = localStorage.getItem(LocalStorageKeys.projects);
  if (projects === null) {
    await refetchProjects();
  } else {
    setProjects(JSON.parse(projects) as Project[]);
  }
};

const App: Component = () => {
  onMount(() => {
    const asyncCheckForUpdate = async () => {
      const currentVersion = localStorage.getItem(LocalStorageKeys.version);
      const latestVersion = await getLatestVersion();

      if (currentVersion === null || currentVersion !== latestVersion) {
        console.log('Outdated version, refetching projects');
        localStorage.setItem(LocalStorageKeys.version, latestVersion);
        refetchProjects();
      } else {
        console.log('Loading from local');
        loadProjects();
      }
    };

    const asyncLoadResume = async () => {
      const resumeLink = await getResumeLink();
      setResume(resumeLink);
    };

    asyncCheckForUpdate();
    asyncLoadResume();
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path={Paths.home} component={Home} />
            <Route path={Paths.projects} component={Projects} />
            <Route path={Paths.notFound} component={Page404} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
