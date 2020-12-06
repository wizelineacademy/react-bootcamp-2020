import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { NavBar } from '../components/NavBar';
import { RelatedVideos } from '../components/RelatedVideos';

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/rel' component={RelatedVideos} />
          <Route path='/login' component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};
