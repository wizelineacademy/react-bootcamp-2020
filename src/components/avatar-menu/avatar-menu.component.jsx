import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './avatar-menu.styles.scss';

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <Avatar onClick={handleClick} />
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className='avatar-menu-component'
      >
        <MenuItem className='menu-item' onClick={handleClose}>
          <PermIdentityIcon className='menu-icon' fontSize='small' />
          <Link to='/login'>Sign in</Link>
        </MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>
          <ExitToAppIcon className='menu-icon' fontSize='small' />
          <Link to='/'>Log out</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AvatarMenu;
