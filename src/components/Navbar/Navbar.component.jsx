import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Nav, NavOpen, NavMenu, NavMenuContainer, NavMenuItem } from './Navbar.template'
import { useAuth } from '../../providers/Auth';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { logout, authenticated } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    showSidebar();
    setTimeout(() => {
      logout();
    }, 800);
  };

  return (
    <>
      <Nav>
        <NavOpen onClick={showSidebar}>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavOpen>
        <div>React Bootcamp</div>
        <span />
      </Nav>
      <NavMenu active={sidebar}>
        <NavMenuContainer>
          <NavMenuItem onClick={showSidebar}>
            <AiIcons.AiOutlineClose />
          </NavMenuItem>
          {authenticated ? (
            <NavMenuItem onClick={handleLogout}>
              <Link to="/login">Logout</Link>
            </NavMenuItem>
          ) : (
            <NavMenuItem onClick={showSidebar}>
              <Link to="/login">Login</Link>
            </NavMenuItem>
          )}
          {authenticated ? (
            <NavMenuItem onClick={showSidebar}>
              <Link to="/favorites">Favorites</Link>
            </NavMenuItem>
          ) : null}
          <NavMenuItem onClick={showSidebar}>
            <Link to="/">Home</Link>
          </NavMenuItem>
        </NavMenuContainer>
      </NavMenu>
    </>
  );
}

export default Navbar;
