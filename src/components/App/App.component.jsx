import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router';

import HomePage from '../../pages/home';
import WatchVideoPage from '../../pages/watch-video';
import SettingsPage from '../../pages/settings';
import FavoritesPage from '../../pages/favorites';
import LogInPage from '../../pages/log-in';
import SignUp from '../../pages/sign-up';

import Header from '../header';

import './app.styles.scss';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      {location.pathname !== '/login' ? <Header /> : null}
      <div className='app-main-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/settings' component={SettingsPage} />
          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/wv/:videoId' component={WatchVideoPage} />
          <Route path='/login' component={LogInPage} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
