import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchVideos from '../SearchVideos';
import { AuthContext } from '../../contexts/authContext/authContext';
import logo from '../../assets/images/wla-small.png';

const useStyles = makeStyles((theme) => {
  return {
    appBarRoot: {
      boxShadow: 'none',
    },
    logo: {
      top: 14,
      position: 'relative',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.youtubeIconColor,
    },
    toolbarRegular: {
      minHeight: 56,
      justifyContent: 'space-between',
    },
  };
});

export default function TopAppBar() {
  const classes = useStyles();
  const { authState, authActions } = useContext(AuthContext);

  return (
    <>
      <AppBar position="fixed" classes={{ root: classes.appBarRoot }}>
        <Toolbar classes={{ regular: classes.toolbarRegular }}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className={classes.logo} alt="Wizeline Academy" />
          </div>
          <SearchVideos
            onSubmit={() => authActions.authStateChanged({ name: 'fernando' })}
          />
          {authState.user && (
            <Button size="medium" variant="outlined" color="secondary">
              <AccountCircleIcon /> Sign In
            </Button>
          )}
          {!authState.user && (
            <Button size="medium" variant="outlined" color="secondary">
              <AccountCircleIcon /> Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
