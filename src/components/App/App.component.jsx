import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Private from '../Private';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import WatchPage from '../../pages/Watch';
import LoginPage from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search/:searchQuery">
            <SearchPage />
          </Route>
          <Route exact path="/watch/:videoId">
            <WatchPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/favorites">
            <Favorites />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
