import React, { useRef } from 'react';
import CardList from '../../components/Cardlist/CardList.component';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to some youtube copy enjoy!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
        </>
      ) : (
        <> </>
      )}
      <CardList />
    </section>
  );
}

export default HomePage;
