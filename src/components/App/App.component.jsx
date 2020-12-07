import React from 'react';
// import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import SearchPage from '../../pages/Search';
import WatchPage from '../../pages/Watch';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
