import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

import './MenuProfile.styles.css';

export default function MenuProfile() {
  const { logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <ul className="menu">
      <li>
        <a href="/#/favorites">Favorites</a>
      </li>
      <li>
        <Link className="LogoutButton" to="/" onClick={deAuthenticate}>
          Logout
        </Link>
      </li>
    </ul>
  );
}
