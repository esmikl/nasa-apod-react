import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, UnifiThemeProvider } from '@nelnet/unifi-components-react';
import './index.css';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <>
    <UnifiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </UnifiThemeProvider>
  </>,
  document.querySelector('#root'),
);
