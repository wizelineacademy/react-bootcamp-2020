import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import WatchVideo from '../../pages/WatchVideo';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
//import SecretPage from '../../pages/Secret';
//import Private from '../Private';
//import Fortune from '../Fortune';
//import { random } from '../../utils/fns';

function App() {
  /*useLayoutEffect(() => {
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
  }, []); */

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/watch">
              <WatchVideo />
            </Route>
            {/* <Route exact path="/login">
              <LoginPage />
            </Route> */}
            {/* <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
