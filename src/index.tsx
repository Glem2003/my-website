import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

//style
import './assets/styles/root.sass';

// theme
import theme from './theme'
import { ThemeProvider, CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);