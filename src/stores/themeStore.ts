import { LocalStorageKeys, ThemeModes } from '@/enums';
import { createSignal } from 'solid-js';

const initialThemeMode =
  (localStorage.getItem(LocalStorageKeys.theme) as ThemeModes | undefined) ?? ThemeModes.light;

export const [themeMode, setThemeMode] = createSignal(initialThemeMode, {
  equals: (prev, next) => prev.toString() === next.toString()
});
