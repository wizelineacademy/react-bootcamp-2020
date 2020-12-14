import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchBar from '../SearchBar';
import FavoritesToggle from '../FavoritesToggle';
import User from '../User';
import './AppBar.styles.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link edge="start" to="/">
            <YouTubeIcon color="secondary" fontSize="large" />
          </Link>
          <Typography variant="h6" noWrap className="title">
            Favorites
          </Typography>
          <SearchBar />
          <FavoritesToggle />
          <User />
        </Toolbar>
      </AppBar>
    </>
  );
}
