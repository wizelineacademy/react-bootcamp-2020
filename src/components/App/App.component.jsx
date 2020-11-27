import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import SearchProvider from '../../providers/Search/Search.provider';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:video">
                <HomePage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
