/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styles from './Navbar.module.css';
import { useAuth } from '../../providers/Auth';

function Navbar() {
  // state setting
  const [sidebar, setSidebar] = useState(false);
  const { logout, authenticated } = useAuth();

  // handler functions
  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    // close sidebar
    showSidebar();
    // logout and display general search results
    setTimeout(() => {
      logout();
    }, 800);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div onClick={showSidebar} className={styles.nav_open}>
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div className={styles.nav_project_name}>React Bootcamp</div>
        <span />
      </div>
      <nav className={`${styles.nav_menu} ${sidebar ? styles.active : null}`}>
        <ul className={styles.nav_menu_container}>
          <li className={styles.nav_menu_toggle} onClick={showSidebar}>
            <AiIcons.AiOutlineClose />
          </li>
          {authenticated ? (
            <li className={styles.nav_menu_item} onClick={handleLogout}>
              <Link to="/login">Logout</Link>
            </li>
          ) : (
            <li className={styles.nav_menu_item} onClick={showSidebar}>
              <Link to="/login">Login</Link>
            </li>
          )}
          {authenticated ? (
            <li className={styles.nav_menu_item} onClick={showSidebar}>
              <Link to="/favorites">Favorites</Link>
            </li>
          ) : null}
          <li className={styles.nav_menu_item} onClick={showSidebar}>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
