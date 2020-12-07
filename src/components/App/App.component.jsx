import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavoritesPage from '../../pages/Favorites';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SearchPage from '../../pages/Search';

import Private from '../Private';
import Layout from '../Layout';
import Shell from '../Shell';
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

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  console.log('app');

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Shell>
              <Route exact path="/search">
                <SearchPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
            </Shell>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
