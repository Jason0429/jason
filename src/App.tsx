import { Layout, Navbar } from '@/components';
import { Paths } from '@/enums';
import '@/index.css';
import { darkTheme, getTheme } from '@/theme';
import { Route, Router, Routes } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';
import { type Component, lazy } from 'solid-js';

import { themeMode } from './stores/themeStore';

const Home = lazy(() => import('@/views/Home'));
const Page404 = lazy(() => import('@/views/Page404'));

const App: Component = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Navbar />
        <Router>
          <Routes>
            <Route path={Paths.home} component={Home} />
            <Route path={Paths.notFound} component={Page404} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
