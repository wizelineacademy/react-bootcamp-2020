import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuBar = ({ handleHitEnter, handleOnChange }) => {
  const { pathname } = window.location;
  const path = pathname === '/' ? 'home' : pathname.slice(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

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
        name="favorites"
        active={activeItem === 'messages'}
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
          name="logout"
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
