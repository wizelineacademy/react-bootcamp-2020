import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetail from '../../pages/VideoDetail';
import Love from '../../pages/Love';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import { MyContext } from '../../contexts/MyContext';

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
    <BrowserRouter>
      <MyContext.Provider value={[]}>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:videoId" component={VideoDetail} />
              <Route exact path="/love" component={Love} />
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Fortune />
          </Layout>
        </AuthProvider>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
