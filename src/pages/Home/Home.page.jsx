/* 
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
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
*/
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import SuggestedSearches from '../../components/SuggestedSearches';

import './Home.styles.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <Logo />
      <SearchBar initSearchQuery={searchQuery} onChange={setSearchQuery} isHomepage />
      <SuggestedSearches />
    </Layout>
  );
}

export default HomePage;
