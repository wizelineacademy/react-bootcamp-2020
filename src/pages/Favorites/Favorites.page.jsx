import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function FavoritesPage() {
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
      <h1>Favorites!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/favorites">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default FavoritesPage;
