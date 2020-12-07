import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import YoutubeProvider from './providers/Youtube';
import HomePage from './pages/Home';
import WatchVideoPage from './pages/Watch';
import NotFoundPage from './pages/NotFound';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <YoutubeProvider>
        <Switch>
          <Route path="/watch/:id">
            <WatchVideoPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </YoutubeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
