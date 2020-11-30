import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import SearchForm from '../Search/SearchForm.component';

export default function Navbar() {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <SearchForm />
        {authenticated ? (
          <>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          </>
        ) : (
          <Link to="/login">login →</Link>
        )}
      </div>
    </nav>
  );
}
