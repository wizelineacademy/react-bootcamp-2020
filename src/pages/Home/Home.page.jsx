import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
      <h1>Welcome</h1>
      <br />
      {authenticated ?
        (
          <>
            <h2>
              Go back to<Link to="/main" className="link"> Main Page </Link>
            </h2>
            <h2>
              <Link to="/" onClick={deAuthenticate} className="link">
                ← Logout
            </Link>
            </h2>
          </>
        )
        : (
          <h2>
            Please<Link to="/login" className="link"> Log in </Link>
      to continue</h2 >
        )
      }
    </section >
  );
}

export default HomePage;
