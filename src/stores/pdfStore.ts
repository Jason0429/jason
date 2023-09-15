import { createSignal } from 'solid-js';

export const [resume, setResume] = createSignal<string | undefined>(undefined);
