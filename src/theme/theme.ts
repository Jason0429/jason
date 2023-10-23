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
      fontSize: '0.9rem'
    },
    body2: {
      fontSize: '0.9rem',
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
          color: '#555555'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        style: {
          color: '#222222'
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
      main: '#463F3A',
      contrastText: '#F4F3EE'
    },
    text: {
      primary: '#222222',
      secondary: '#666666'
    },
    background: {
      // #EDEDE9
      // #D6CCC2
      // #F5EBE0
      // #E3D5CA
      // #D5BDAF

      default: '#F5EBE0',
      paper: '#E3D5CA'
    }
  }
});
