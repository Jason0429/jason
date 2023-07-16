import { ThemeModes } from '@/enums';
import { createTheme } from '@suid/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1rem'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        style: {
          'font-family': 'Montserrat, sans-serif',
          color: '#222222'
        }
      }
    }
  },
  palette: {
    mode: ThemeModes.light,
    primary: {
      main: '#eeeeee'
    },
    text: {
      primary: '#222222',
      secondary: '#444444'
    },
    background: {
      default: '#eeeeee',
      paper: '#ffffff'
    }
  }
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1600
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    body1: {
      fontSize: '1rem'
    },
    subtitle1: {
      fontSize: '0.8rem'
    }
  },
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
        style: {
          color: '#cccccc'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        style: {
          color: '#ffffff'
        }
      }
    }
  },
  palette: {
    mode: ThemeModes.dark,
    primary: {
      main: '#222222'
    },
    secondary: {
      main: '#383838'
    },
    text: {
      primary: '#ffffff',
      secondary: '#dddddd'
    },
    background: {
      default: '#232323',
      paper: '#404040'
    }
  }
});

export const themes = {
  [ThemeModes.light]: lightTheme,
  [ThemeModes.dark]: darkTheme
};
