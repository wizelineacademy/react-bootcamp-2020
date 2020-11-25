import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Sidebar.styles.css';

const Sidebar = ({ isOpen, toggle }) => {
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
      </div>
    </div>,
    domNode
  );
};

export default Sidebar;
