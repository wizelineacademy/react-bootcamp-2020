import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import useStyles from './RightSideStyles';
import { useAuth } from '../../providers/Auth';

function RighSideMenu() {
  const { authenticated, logout } = useAuth();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    logout();
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!authenticated ? (
        <Link to="/login" className="nav-link" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>
      ) : (
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      )}
    </Menu>
  );
  return (
    <div className={classes.sectionDesktop}>
      <IconButton color="inherit">
        <Brightness4Icon />
      </IconButton>
      <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </div>
  );
}

export default RighSideMenu;
