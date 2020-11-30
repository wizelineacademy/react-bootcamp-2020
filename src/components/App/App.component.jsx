import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './App.styles.css'
import VideoGrid from '../VideoGrid';
import { videos } from '../../mock'

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <YouTubeIcon color="secondary" fontSize="large" />
          <Typography variant="h6" noWrap className="title">
            YouTube Fav
          </Typography>
          <InputBase
            className="searchbar"
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Button color="inherit" className="right">Login</Button>
        </Toolbar>
      </AppBar>
      <VideoGrid videos={videos} />
    </React.Fragment>
  );
}
