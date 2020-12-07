import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchBar from '../SearchBar';
import User from '../User';
import './AppBar.styles.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link edge="start" href="/" target="_self" rel="noopener noreferrer">
            <YouTubeIcon color="secondary" fontSize="large" />
          </Link>
          <Typography variant="h6" noWrap className="title">
            Favorites
          </Typography>
          <SearchBar />
          <User />
        </Toolbar>
      </AppBar>
    </>
  );
}
