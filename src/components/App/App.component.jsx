import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import LocalThemeProvider from '../../providers/Theme';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';
import PlayerPage from '../../pages/Player';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <VideoProvider>
          <LocalThemeProvider>
            <Navbar />
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
                <Private exact path="/favorites">
                  <FavoritesPage />
                </Private>
                <Route
                  exact
                  path="/player/:id"
                  render={({ match }) => <PlayerPage id={match} />}
                />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </LocalThemeProvider>
        </VideoProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
