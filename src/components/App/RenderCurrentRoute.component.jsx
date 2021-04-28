import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetailPage from '../../pages/VideoDetail/index';
import NotFound from '../../pages/NotFound';
import FavouritesPage from '../../pages/Favourites';

import ProtectedRoute from '../ProtectedRoutes/index';

const RenderCurrentRoute = ({ toggleDrawer, isOpen }) => {
  return (
    <Switch>
      <Route
        path="/video"
        render={({ match }) => {
          return (
            <>
              <Route exact path={`${match.url}/`}>
                <HomePage toggleDrawer={toggleDrawer} isOpen={isOpen} />
              </Route>
              <Route path={`${match.url}/:id`}>
                <VideoDetailPage toggleDrawer={toggleDrawer} isOpen={isOpen} />
              </Route>
            </>
          );
        }}
      />
      <Route exact path="/">
        <HomePage toggleDrawer={toggleDrawer} isOpen={isOpen} />
      </Route>
      <ProtectedRoute exact path="/favourites/">
        <FavouritesPage toggleDrawer={toggleDrawer} isOpen={isOpen} />
      </ProtectedRoute>
      <ProtectedRoute exact path="/favourites/video/:id">
        <VideoDetailPage toggleDrawer={toggleDrawer} isOpen={isOpen} isFavourite="true" />
      </ProtectedRoute>
      <Route path="*">
        <NotFound toggleDrawer={toggleDrawer} isOpen={isOpen} />
      </Route>
    </Switch>
  );
};

export default RenderCurrentRoute;
