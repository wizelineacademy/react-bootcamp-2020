import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/home';
import WatchVideoPage from '../../pages/watch-video';
import SettingsPage from '../../pages/settings';
import FavoritesPage from '../../pages/favorites';

import Header from '../header';

import './app.styles.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app-main-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/wv/:videoId' component={WatchVideoPage} />
          <Route path='/settings' component={SettingsPage} />
          <Route path='/favorites' component={FavoritesPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
