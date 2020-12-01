import React, { useLayoutEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';
import PlayerPage from '../../pages/Player';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Navbar from '../Navbar';
import { random } from '../../utils/fns';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <HashRouter>
      <AuthProvider>
        <VideoProvider>
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
            <Fortune />
          </Layout>
        </VideoProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
