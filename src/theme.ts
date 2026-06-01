import { createTheme } from '@mui/material/styles';

export const nuffieldColors = {
  primary: '#00A39E',
  dark: '#005F5C',
  accent: '#33B6B2',
  bg: '#F7FAFA',
  surface: '#FFFFFF',
  ink: '#1F2937',
  muted: '#6B7280',
};

export const severityColors = {
  Low: '#10B981',
  Medium: '#F59E0B',
  High: '#EF4444',
  Critical: '#7F1D1D',
} as const;

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: nuffieldColors.primary,
      dark: nuffieldColors.dark,
      light: nuffieldColors.accent,
      contrastText: '#FFFFFF',
    },
    background: {
      default: nuffieldColors.bg,
      paper: nuffieldColors.surface,
    },
    text: {
      primary: nuffieldColors.ink,
      secondary: nuffieldColors.muted,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", system-ui, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.015em' },
    h3: { fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)',
          border: '1px solid #E5E7EB',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});
