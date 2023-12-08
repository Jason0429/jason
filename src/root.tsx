// @refresh reload
import { Suspense, onMount } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";
import "./root.css";
import { getLatestVersion, getProjects } from "@/api";
import { LocalStorageKeys } from "@/enums";
import type { Project } from "@/types";
import DragonLionIcon from "@/assets/dragonlion.svg";

import { setProjects } from "./stores";
import { ThemeProvider } from "@suid/material";
import { theme } from "./theme";
import Layout from "./components/Layout";

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

export default function Root() {
  onMount(() => {
    const asyncCheckForUpdate = async () => {
      const currentVersion = localStorage.getItem(LocalStorageKeys.version);
      const latestVersion = await getLatestVersion();

      if (currentVersion === null || currentVersion !== latestVersion) {
        console.log("Outdated version, refetching projects");
        localStorage.setItem(LocalStorageKeys.version, latestVersion);
        refetchProjects();
      } else {
        console.log("Loading from local");
        loadProjects();
      }
    };

    asyncCheckForUpdate();
  });

  return (
    <ThemeProvider theme={theme}>
      <Html lang="en">
        <Head>
          <Title>Jason Cheung</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="shortcut icon" type="image/ico" href={DragonLionIcon} />
        </Head>
        <Body>
          <Layout>
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </Layout>
          <Scripts />
        </Body>
      </Html>
    </ThemeProvider>
  );
}
