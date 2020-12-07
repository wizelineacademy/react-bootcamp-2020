import React, { useRef } from 'react';
import Videos from '../../components/Videos';

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      <Videos />
    </section>
  );
}

export default HomePage;
