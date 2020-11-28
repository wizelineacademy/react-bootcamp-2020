/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from '../../pages/home';
import WatchVideoPage from '../../pages/watch-video';
import SettingsPage from '../../pages/settings';
import FavoritesPage from '../../pages/favorites';
import LogInPage from '../../pages/log-in';
import SignUpPage from '../../pages/sign-up';

import Header from '../header';

import { auth } from '../../utils/js/firebase';

import './app.styles.scss';

const initialState = {
  currentUser: {},
};

const App = () => {
  const location = useLocation();
  const [authState, setAuthState] = useState(initialState);

  useEffect(function () {
    auth.onAuthStateChanged((user) => {
      const newState = {
        ...authState,
        currentUser: user,
      };
      console.log(user);
      setAuthState(() => newState);
    });
  }, []);

  return (
    <div className='app'>
      {location.pathname !== '/login' && location.pathname !== '/signup' ? (
        <Header />
      ) : null}
      <div className='app-main-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/settings' component={SettingsPage} />
          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/wv/:videoId' component={WatchVideoPage} />
          <Route path='/login' component={LogInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
