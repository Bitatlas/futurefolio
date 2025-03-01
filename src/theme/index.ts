import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define the theme interface
interface ThemeConfig {
  darkTheme: ThemeOptions;
  lightTheme: ThemeOptions;
}

// Create theme configurations
const themeConfig: ThemeConfig = {
  darkTheme: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#FFD700', // Yellow
        light: '#FFEB3B',
        dark: '#FFC107',
        contrastText: '#121212',
      },
      secondary: {
        main: '#FFC107', // Amber
        light: '#FFD54F',
        dark: '#FF8F00',
        contrastText: '#121212',
      },
      background: {
        default: '#121212', // Black
        paper: '#1E1E1E',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#AAAAAA',
      },
      success: {
        main: '#4CAF50',
      },
      error: {
        main: '#F44336',
      },
      warning: {
        main: '#FF9800',
      },
      info: {
        main: '#2196F3',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: '#2b2b2b',
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: '#6b6b6b',
              minHeight: 24,
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#959595',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            border: '1px solid rgba(255, 215, 0, 0.18)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.37)',
              borderColor: 'rgba(255, 215, 0, 0.5)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 500,
          },
          containedPrimary: {
            boxShadow: '0 4px 14px 0 rgba(255, 215, 0, 0.39)',
            '&:hover': {
              boxShadow: '0 6px 20px 0 rgba(255, 215, 0, 0.5)',
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 215, 0, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.25)',
              },
            },
          },
        },
      },
    },
    shape: {
      borderRadius: 10,
    },
  },
  lightTheme: {
    palette: {
      mode: 'light',
      primary: {
        main: '#FFD700', // Yellow
        light: '#FFEB3B',
        dark: '#FFC107',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#FFC107', // Amber
        light: '#FFD54F',
        dark: '#FF8F00',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#FFFFFF',
        paper: '#F5F5F5',
      },
      text: {
        primary: '#121212',
        secondary: '#555555',
      },
      success: {
        main: '#4CAF50',
      },
      error: {
        main: '#F44336',
      },
      warning: {
        main: '#FF9800',
      },
      info: {
        main: '#2196F3',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.18)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.2)',
              borderColor: 'rgba(255, 215, 0, 0.5)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 500,
          },
          containedPrimary: {
            boxShadow: '0 4px 14px 0 rgba(255, 215, 0, 0.39)',
            '&:hover': {
              boxShadow: '0 6px 20px 0 rgba(255, 215, 0, 0.5)',
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 215, 0, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.25)',
              },
            },
          },
        },
      },
    },
    shape: {
      borderRadius: 10,
    },
  },
};

// Create theme context
export const darkTheme = createTheme(themeConfig.darkTheme);
export const lightTheme = createTheme(themeConfig.lightTheme);

export default themeConfig;
