import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import ThemeButton from '../ThemeButton/ThemeButton';
import LoginMenu from '../LoginMenu/LoginMenu';
import useStyles from './Navbar.styled';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <SearchBar />
          <div className={classes.grow} />
          <ThemeButton />
          <LoginMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
