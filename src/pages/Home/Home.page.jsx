import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Videos from '../../components/Videos';
import { useAuth } from '../../providers/Auth';
import { VideoContext } from '../../providers/Video';

import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { videos } = useContext(VideoContext);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  
  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <h1>Good to have you back </h1>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/favorites">show me something cool →</Link>
          </span>
        </>
      ) : (
        <h1>Welcome to the challenge 2020</h1>
      )}
      <Videos videos={videos}/>
    </section>
  );
}

export default HomePage;
