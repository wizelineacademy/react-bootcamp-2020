import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './Home.styles.css';
import reactLogo from '../../assets/react.png';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <>
      <section className="homepage" ref={sectionRef}>
        <img src={reactLogo} alt="React logo" className="react-logo" />
        <h1>React certification</h1>
      </section>
      <div className="dynamic-gradient enter-button">
        <Link to="/search"> Enter </Link>
      </div>
    </>
  );
}

export default HomePage;
