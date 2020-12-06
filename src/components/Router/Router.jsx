import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/Home/Home.page';
import NotFound from '../../pages/NotFound';
import VideoPage from '../../pages/Video/VideoPage';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
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
          <Private exact path="/favorites">
            <FavoritesPage />
          </Private>
          <Private exact path="/favorites/:id">
            <VideoPage />
          </Private>
          <Route exact path="/:id">
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
