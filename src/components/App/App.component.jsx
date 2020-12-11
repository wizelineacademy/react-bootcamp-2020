import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Reproducer from '../../pages/Reproducer';

import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';

import VideoSearchContext from '../../state/VideoSearchContext';
import VideoSelectedContext from '../../state/VideoSelectedContext';

function App() {
  const [query, setQuery] = React.useState('Wizeline');
  const [selectedVideoId, setSelectedVideoId] = React.useState();

  const queryFn = (newQuery) => {
    console.log(newQuery);
    setQuery(() => newQuery);
  };

  const selectedVideoFn = (newId) => {
    console.log(newId);
    setSelectedVideoId(() => newId);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoSearchContext.Provider value={{ query, queryFn }}>
          <VideoSelectedContext.Provider
            value={{ videoId: selectedVideoId, setVideoIdFn: selectedVideoFn }}
          >
            <Layout>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/favorites">
                  <SecretPage />
                </Private>
                <Route exact path="/reproducer">
                  <Reproducer />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideoSelectedContext.Provider>
        </VideoSearchContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
