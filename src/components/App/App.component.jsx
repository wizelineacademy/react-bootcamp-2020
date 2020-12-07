import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import Sidebar from '../Sidebar';
import Private from '../Private';
// import Videos from '../Videos';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  useLayoutEffect(() => {}, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Navbar />
          <Sidebar>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Sidebar>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
