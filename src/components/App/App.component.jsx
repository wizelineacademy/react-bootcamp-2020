import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import VideosProvider from '../../providers/Video';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import Sidebar from '../Sidebar';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoPage from '../../pages/Video';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    display: flexbox;
    text-rendering: optimizeLegibility;
  }`;

function App() {
  useLayoutEffect(() => {}, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <GlobalStyle />
          <Navbar />
          <Sidebar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/video/:idVideo">
                <VideoPage/>
              </Route>
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
