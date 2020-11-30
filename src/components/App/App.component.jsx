import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../VideoState/Provider';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import FavoritePage from '../../pages/Favorite';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  const [gapiReady, setgapiReady] = useState(false);

  useEffect(() => {
    console.log('Component is mounted');

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(process.env.APP_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          setgapiReady(true);
        });
      });
    };

    document.body.appendChild(script);
  }, []);

  if (gapiReady) {
    console.log('ready!!');

    return (
      <BrowserRouter>
        <AuthProvider>
          <VideoProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Private exact path="/favorites">
                  <FavoritePage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  }
  return <> Loding </>;
}

export default App;
