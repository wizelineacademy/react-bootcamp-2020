import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header.component';
import SideNav from '../../components/SideNav';
import LoginPage from '../Login';
import Main from '../../components/Main/Main.components';
import NotFound from '../NotFound';
import SecretPage from '../Secret';
import Private from '../../components/Private';
import Layout from '../../components/Layout';
import { GlobalStyle, theme } from '../../GloblaStyles';

import { useAuth } from '../../providers/Auth';

function Home() {
  const { state } = useAuth();

  return (
    <ThemeProvider theme={state.mode ? theme.light : theme.dark}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Layout>
              <SideNav />
              <Main />
            </Layout>
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/favorites">
            <SecretPage />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Home;
