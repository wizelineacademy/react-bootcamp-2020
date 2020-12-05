/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './providers/auth';
import VideosProvider from './providers/videos';
import FavoritesProvider from './providers/favorites';

import App from './components/app';
import './global.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <VideosProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </VideosProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// CREATE NEW TEMPLATE rfce
