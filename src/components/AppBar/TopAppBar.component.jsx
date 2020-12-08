import React, { useContext, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Avatar from '@material-ui/core/Avatar';
import SearchVideos from '../SearchVideos';
import { AuthContext } from '../../contexts/authContext/authContext';
import { DialogContext } from '../../contexts/dialogContext/Dialog';
import logo from '../../assets/images/wla-small.png';

const useStyles = makeStyles((theme) => {
  return {
    appBarRoot: {
      boxShadow: 'none',
      zIndex: 1300,
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
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  };
});

function UserMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.avatar}
        />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default function TopAppBar() {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  const { dialogActions } = useContext(DialogContext);
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
          <SearchVideos onSubmit={() => {}} />
          {authState.user && <UserMenu />}
          {!authState.user && (
            <Button
              onClick={() => {
                dialogActions.setOpen('miDialogo', true);
              }}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              <AccountCircleIcon /> Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
