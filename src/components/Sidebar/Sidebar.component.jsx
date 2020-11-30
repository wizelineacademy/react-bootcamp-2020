import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Sidebar.styles.css';
import { useAuth } from '../../providers/Auth';

const Sidebar = ({ isOpen, toggle }) => {
  const { authenticated } = useAuth();
  const domNode = document.getElementById('sidebar-container');

  if (!domNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`overlay-wrapper ${isOpen ? 'opened' : ''}`}
      onClick={toggle}
      role="presentation"
    >
      <div className={`sidebar-links ${isOpen ? 'opened' : ''}`}>
        <div className="sidebar-items">
          <NavLink to="/">Home</NavLink>
        </div>
        {authenticated ? (
          <div className="sidebar-items">
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
        ) : null}
      </div>
    </div>,
    domNode
  );
};

export default Sidebar;
