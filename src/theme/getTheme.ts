import { ThemeModes } from '@/enums';

import { themes } from './theme';

export const getTheme = (mode: ThemeModes) => {
  return themes[mode];
};
