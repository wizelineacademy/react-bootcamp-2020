import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth.provider';

const MenuBar = ({ handleHitEnter, handleOnChange }) => {
  const history = useHistory();
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

  return (
    <Menu secondary>
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
        <Menu.Item
          as={Link}
          to="/login"
          name={authenticated ? 'Logout' : 'Login'}
          active={activeItem === 'logout'}
          onClick={authenticated ? deAuthenticate : () => history.push('/')}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
