import { Project } from '@/types';
import { createSignal } from 'solid-js';

export const [projects, setProjects] = createSignal<Project[]>([]);
