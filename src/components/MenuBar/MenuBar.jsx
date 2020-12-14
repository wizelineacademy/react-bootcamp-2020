import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';
import {
  Menu,
  MenuItem,
  Left,
  Right,
  FavoritesItem,
  InputItem,
  RadioItem,
} from './MenuBar.styles';

import VideosContext from '../../context/VideosContext';
import ThemeContext from '../../context/ThemeContext';

const MenuBar = () => {
  const history = useHistory();
  const { light, handleTheme } = useContext(ThemeContext);
  const { handleHitEnter, handleOnChange } = useContext(VideosContext);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/login');
  }

  return (
    <Menu>
      <Left>
        <MenuItem as={Link} to="/">
          Home
        </MenuItem>

        {authenticated && (
          <FavoritesItem as={Link} to="/favorites">
            Favorites
          </FavoritesItem>
        )}
      </Left>
      <Right>
        <InputItem
          icon="search"
          placeholder="Search..."
          onChange={handleOnChange}
          onKeyPress={handleHitEnter}
        />
        <RadioItem toggle checked={!light} onChange={handleTheme} />

        <MenuItem as={Link} to="/login" onClick={authenticated && deAuthenticate}>
          {authenticated ? 'Logout' : 'Login'}
        </MenuItem>
      </Right>
    </Menu>
  );
};

export default MenuBar;
