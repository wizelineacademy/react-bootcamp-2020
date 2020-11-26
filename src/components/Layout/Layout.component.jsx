import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Layout.styles.css';

function Layout({ children }) {
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
            <form>
              <input type="search" placeholder="Search" aria-label="Search" />
              <button type="submit">Search</button>
            </form>
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

export default Layout;
