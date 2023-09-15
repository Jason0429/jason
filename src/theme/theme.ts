import { createTheme } from '@suid/material';

export const theme = createTheme({
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
      fontSize: '4rem',
      fontWeight: 800
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 800
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 800
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 800
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 800
    },
    body1: {
      fontSize: '0.85rem'
    },
    body2: {
      fontSize: '0.85rem',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '0.7rem'
    },
    subtitle2: {
      fontSize: '0.7rem',
      fontWeight: 500
    }
  },
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
        style: {
          color: '#666666'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        style: {
          color: '#252526'
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        sx: {
          borderRadius: 5
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#222222'
    },
    secondary: {
      main: '#252526'
    },
    text: {
      primary: '#252526',
      secondary: '#525253'
    },
    background: {
      default: '#FCFCFC',
      paper: '#F6F6F6'
    }
  }
});
