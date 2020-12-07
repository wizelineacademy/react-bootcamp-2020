/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './providers/auth';
import VideosProvider from './providers/videos';
import FavoritesProvider from './providers/favorites';
import ThemeProvider from './providers/theme';

import App from './components/app';

import { GlobalStyles } from './global.styles';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyles />
        <AuthProvider>
          <VideosProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </VideosProvider>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// CREATE NEW TEMPLATE rfce
