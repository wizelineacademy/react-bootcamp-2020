import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import YoutubeProvider from './providers/Youtube';
import AuthProvider from './providers/Auth';
import HomePage from './pages/Home';
import WatchVideoPage from './pages/Watch';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <YoutubeProvider>
        <AuthProvider>
          <Switch>
            <Route path="/watch/:id">
              <WatchVideoPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/">
              <NotFoundPage />
            </Route>
          </Switch>
        </AuthProvider>
      </YoutubeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
