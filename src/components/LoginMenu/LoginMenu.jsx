import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LoginForm from '../LoginForm/LoginForm';
import { useAuth } from '../../providers/Auth';

const TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'right',
};

const ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'right',
};

function LoginMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { user, isLoggedIn, logout } = useAuth();

  const [anchorElement, setAnchorElement] = useState(null);

  const openMenu = Boolean(anchorElement);

  function handleMenu(event) {
    setAnchorElement(event.currentTarget);
  }

  function handleMenuItemClose() {
    setAnchorElement(null);
  }

  function doLogin() {
    handleMenuItemClose();
    setOpen(true);
  }

  function doLogout() {
    logout();
    handleMenuItemClose();
  }

  return (
    <>
      <IconButton
        edge="end"
        aria-label="User profile dropdown"
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
      >
        <Avatar src={user?.avatarUrl || null} alt="Avatar" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElement}
        anchorOrigin={ANCHOR_ORIGIN}
        keepMounted
        transformOrigin={TRANSFORM_ORIGIN}
        open={openMenu}
        onClose={handleMenuItemClose}
      >
        {isLoggedIn ? (
          <MenuItem onClick={doLogout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={doLogin}>Login</MenuItem>
        )}
      </Menu>
      {open && <LoginForm open={open} handleClose={handleClose} />}
    </>
  );
}

export default LoginMenu;
