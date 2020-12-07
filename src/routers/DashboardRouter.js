import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { FavoriteVideosScreen } from '../components/FavoriteVideosScreen';

import { HomeScreen } from '../components/HomeScreen';
import { NavBar } from '../components/NavBar';
import { RelatedVideos } from '../components/RelatedVideos';
import { VideoScreen } from '../components/VideoScreen';

export const DashBoardRouter = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/rel' component={RelatedVideos} />
          <Route path='/video' component={VideoScreen} />
          <Route path='/favorites' component={FavoriteVideosScreen} />

          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};
