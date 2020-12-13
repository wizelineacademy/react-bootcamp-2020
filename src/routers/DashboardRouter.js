import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { FavoriteVideosScreen } from '../components/FavoriteVideosScreen';

import { HomeScreen } from '../components/HomeScreen';
import { NavBar } from '../components/NavBar';

import { VideoScreen } from '../components/VideoScreen';
import { GlobalContext } from '../context/GlobalContext';

export const DashBoardRouter = () => {
  const { theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';
  return (
    <>
      <NavBar />
      <div className={themeMode}>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/video' component={VideoScreen} />
          <Route
            path='/favorites'
            component={FavoriteVideosScreen}
            style={{ height: '100vh' }}
          />

          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};
