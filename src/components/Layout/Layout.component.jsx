import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import SearchForm from '../Search/SearchForm.component';

import './Layout.styles.css';

export default function Layout({ children }) {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <header>
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
      </header>
      <main className="container">{children}</main>
    </>
  );
}
