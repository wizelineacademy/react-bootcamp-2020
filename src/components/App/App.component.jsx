import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import AppDataProvider from '../../providers/AppData';
import VideoPlayer from '../../pages/VideoPlayer';
import Theme from '../Theme';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppDataProvider>
          <Theme>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/watch/:idVideo">
                  <VideoPlayer />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/favorites">
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </Theme>
        </AppDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
