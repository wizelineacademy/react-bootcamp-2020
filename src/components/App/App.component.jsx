import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header.component';
import SideNav from '../SideNav/SideNav.component';
import LoginPage from '../../pages/Login/Login.page';
import Home from '../../pages/Home/Home.component';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private/Private.component';
import Layout from '../Layout/Layout.component';
import Video from '../../pages/Video/Video.component';
import AuthProvider from '../../providers/Auth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Header />
            <Layout>
              <SideNav />
              <Home />
            </Layout>
          </Route>
          <Route exact path="/video/:id">
            <Header />
            <Layout>
              <SideNav />
              <Video />
            </Layout>
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/favorites">
            <Header />
            <Layout>
              <SideNav />
              <Home />
            </Layout>
          </Private>
          <Private exact path="/favorites/:id">
            <Header />
            <Layout>
              <SideNav />
              <Video />
            </Layout>
          </Private>
          <Route exact path="/secret">
            <Header />
            <Layout>
              <SideNav />
              <SecretPage />
            </Layout>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
