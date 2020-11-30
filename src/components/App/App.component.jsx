import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { AuthContext } from '../../providers/auth';
import { setCurrentAuth } from '../../providers/auth/auth.actions';

import HomePage from '../../pages/home';
import WatchVideoPage from '../../pages/watch-video';
import SettingsPage from '../../pages/settings';
import FavoritesPage from '../../pages/favorites';
import LogInPage from '../../pages/log-in';
import SignUpPage from '../../pages/sign-up';

import Header from '../header';

import { auth, createUserProfileDocument } from '../../utils/js/firebase';

import './app.styles.scss';

const App = () => {
  const location = useLocation();
  const { authState, authDispatch } = useContext(AuthContext);
  const { currentAuth } = authState;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const newState = {
            id: snapShot.id,
            ...snapShot.data(),
          };

          authDispatch(setCurrentAuth(newState));
        });
      } else {
        authDispatch(setCurrentAuth(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [authDispatch]);

  return (
    <div className='app'>
      {location.pathname !== '/login' && location.pathname !== '/signup' ? (
        <Header />
      ) : null}
      <div className='app-main-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/settings' component={SettingsPage} />
          <Route exact path='/favorites' component={FavoritesPage} />
          <Route path='/wv/:videoId' component={WatchVideoPage} />
          <Route
            exact
            path='/login'
            render={() => (currentAuth ? <Redirect to='/' /> : <LogInPage />)}
          />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
