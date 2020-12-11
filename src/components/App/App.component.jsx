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

import { AppContainer, AppMainContainer } from './app.styles';

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
    <AppContainer>
      {location.pathname !== '/login' && location.pathname !== '/signup' ? (
        <Header />
      ) : null}
      <AppMainContainer>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/wv/:videoId' component={WatchVideoPage} />
          <Route path='/settings' component={SettingsPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route
            exact
            path='/favorites'
            render={() => (currentAuth ? <FavoritesPage /> : <Redirect to='/' />)}
          />
          <Route
            exact
            path='/login'
            render={() => (currentAuth ? <Redirect to='/' /> : <LogInPage />)}
          />
        </Switch>
      </AppMainContainer>
    </AppContainer>
  );
};

export default App;
