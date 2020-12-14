import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import YouTube from '../YouTube';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <nav className="nav-bar">
        <Link to="/love">❤ Videos</Link> <br />
        {authenticated ? (
          <>
            <h4>Good to have you back</h4>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">Log in Rocker→</Link>
        )}
      </nav>
      <YouTube />
    </section>
  );
}

export default HomePage;
