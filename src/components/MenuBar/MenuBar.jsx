import React, { useState, useContext } from 'react';
import { Input, Menu, Radio } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';

import VideosContext from '../../context/VideosContext';
import ThemeContext from '../../context/ThemeContext';

const MenuBar = () => {
  const history = useHistory();
  const { light, handleTheme } = useContext(ThemeContext);
  const { handleHitEnter, handleOnChange } = useContext(VideosContext);

  const { authenticated, logout } = useAuth();
  const { pathname } = window.location;
  const path = pathname === '/' ? 'home' : pathname.slice(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/login');
  }

  const menuBar = authenticated ? (
    <Menu secondary inverted={!light} size="large">
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />

      <Menu.Item
        as={Link}
        to="/favorites"
        name="favorites"
        active={activeItem === 'favorites'}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={handleOnChange}
            onKeyPress={handleHitEnter}
          />
        </Menu.Item>
        <Menu.Item>
          <Radio toggle checked={!light} onChange={handleTheme} />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name="Logout"
          active={activeItem === 'login'}
          onClick={deAuthenticate}
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu secondary inverted={!light}>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={handleOnChange}
            onKeyPress={handleHitEnter}
          />
          <Menu.Item>
            <Radio toggle checked={!light} onChange={handleTheme} />
          </Menu.Item>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
