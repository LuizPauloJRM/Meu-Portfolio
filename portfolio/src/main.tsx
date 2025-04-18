import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material'; // Import do ThemeProvider do Material-UI
import CssBaseline from '@mui/material/CssBaseline'; // Para resetar estilos padrão do navegador

import App from './App.tsx';
import theme from './theme.ts'; // Import do tema criado

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica estilos globais do Material-UI */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);