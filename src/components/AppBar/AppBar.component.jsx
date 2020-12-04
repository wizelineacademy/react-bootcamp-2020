import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './AppBar.styles.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <a href="/" target="_self" rel="noopener noreferrer">
            <YouTubeIcon color="secondary" fontSize="large" />
          </a>
          <Typography variant="h6" noWrap className="title">
            Favorites
          </Typography>
          <InputBase
            className="searchbar"
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Button color="inherit" className="right">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
