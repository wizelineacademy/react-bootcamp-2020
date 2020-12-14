import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.styles.css';

function Sidebar({ children }) {
  return (
    <>
      <aside>
        <ul>
          <li className="item">
            <Link to="/favorites">Favoritos</Link>
          </li>
          <li className="item">
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </aside>
      {children}
    </>
  );
}

export default Sidebar;
