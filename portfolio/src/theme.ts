import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#edf2ff',
    },
    info: {
      main: '#edf2ff', // Reutilizando a cor secundária como "info"
    },
  },
  typography: {
    fontFamily: [
      // '"Helvetica Neue"',
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;