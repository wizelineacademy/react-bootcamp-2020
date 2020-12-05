import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchBar from '../SearchBar';
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
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Button color="inherit" className="right">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
