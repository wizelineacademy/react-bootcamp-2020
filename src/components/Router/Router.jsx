import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

function Router() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/secret">
            <SecretPage />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default Router;
