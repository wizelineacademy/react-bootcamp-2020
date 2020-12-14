import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/Home';
import WatchPage from './pages/Watch';
import './global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites'
import SignIn from './pages/Login/Login'
import AuthProvider from './AuthContext'
import FavoritesWatch from './pages/FavoritesWatch'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <Switch>
      <Route path="/login">
          <SignIn />
      </Route>
      <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/favorite_watch/:id">
          <FavoritesWatch />
      </Route>
        <Route path="/watch/:id">
          <WatchPage />
        </Route>
        <Route path="/">
          <HomePage />
          
        </Route>
      </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
