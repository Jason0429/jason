import { createSignal } from 'solid-js';

import { LocalStorageKeys, ThemeModes } from '../enums';

const initialThemeMode =
  (localStorage.getItem(LocalStorageKeys.theme) as ThemeModes | undefined) ?? ThemeModes.light;

export const [themeMode, setThemeMode] = createSignal(initialThemeMode, {
  equals: (prev, next) => prev.toString() === next.toString()
});
