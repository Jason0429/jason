import { createSignal } from 'solid-js';

export const [version, setVersion] = createSignal<string | null>(null);
