import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/Home/Home.page';
import NotFound from '../../pages/NotFound';
import VideoPage from '../../pages/Video/VideoPage';
import SecretPage from '../../pages/Secret/Secret.page';
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
          <Private exact path="/secret">
            <SecretPage />
          </Private>
          <Route exact path="/video">
            <VideoPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default Router;
