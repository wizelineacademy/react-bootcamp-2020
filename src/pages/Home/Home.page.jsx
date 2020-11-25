import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
    
        <>
          <h2>Good to have you back</h2>
          <span>
           
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
     
    </section>
  );
}

export default HomePage;
