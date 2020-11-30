/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './providers/auth';
import VideosProvider from './providers/videos';

import App from './components/app';
import './global.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <VideosProvider>
          <App />
        </VideosProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// CREATE NEW TEMPLATE rfce
