import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar';
import RightSideMenu from '../RightSideMenu';
import useStyles from './MainAppBarStyles';

function MainAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          React Bootcamp
        </Typography>
        <SearchBar />
        <div className={classes.grow} />
        <RightSideMenu />
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;
