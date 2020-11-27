import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchContext from '../../state/SearchContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';

import { SEARCH_DEFAULT } from '../../utils/constants';

export default function App() {
  const [search, setSearch] = useState(SEARCH_DEFAULT);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
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
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route exact path="/video/:id">
                <VideoPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Fortune />
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}
