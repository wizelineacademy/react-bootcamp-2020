import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth/Auth.provider';
import VideoProvider from '../../providers/Video/Video.provider';
import FavoritesProvider from '../../providers/Favorites/Favorites.provider';
import LocalThemeProvider from '../../providers/Theme/LocalTheme.provider';
import HomePage from '../../pages/Home/Home.page';
import LoginPage from '../../pages/Login/Login.page';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import FavoritesPlayerPage from '../../pages/FavoritesPlayer/FavoritesPlayer.page';
import PlayerPage from '../../pages/Player/Player.page';
import NotFound from '../../pages/NotFound/NotFound.page';
import Private from '../Private/Private.component';
import Layout from '../Layout/Layout.component';
import Navbar from '../Navbar/Navbar.component';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <VideoProvider>
          <LocalThemeProvider>
            <FavoritesProvider>
              <Navbar />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Private exact path="/favorites">
                    <FavoritesPage />
                  </Private>
                  <Route
                    exact
                    path="/player/:id"
                    render={({ match }) => <PlayerPage id={match} />}
                  />
                  <Route
                    exact
                    path="/favorites/:id"
                    render={({ match }) => <FavoritesPlayerPage id={match} />}
                  />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </FavoritesProvider>
          </LocalThemeProvider>
        </VideoProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
