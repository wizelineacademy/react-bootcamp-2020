import React, { useContext } from 'react';
import { Input, Radio } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { Menu, MenuItem } from './MenuBar.styles';

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

  const menuBar = authenticated ? (
    <Menu>
      <MenuItem as={Link} to="/">
        Home
      </MenuItem>

      <MenuItem as={Link} to="/favorites">
        Favorites
      </MenuItem>

      <MenuItem>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={handleOnChange}
          onKeyPress={handleHitEnter}
        />
      </MenuItem>
      <MenuItem>
        <Radio toggle checked={!light} onChange={handleTheme} />
      </MenuItem>
      <MenuItem as={Link} to="/login" onClick={deAuthenticate}>
        Logout
      </MenuItem>
    </Menu>
  ) : (
    <Menu>
      <MenuItem as={Link} to="/">
        Home
      </MenuItem>

      <MenuItem>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={handleOnChange}
          onKeyPress={handleHitEnter}
        />
        <MenuItem>
          <Radio toggle checked={!light} onChange={handleTheme} />
        </MenuItem>
      </MenuItem>
      <MenuItem as={Link} to="/login">
        Login
      </MenuItem>
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
