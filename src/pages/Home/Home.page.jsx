import React, { useRef } from 'react';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCardGrid from '../../components/VideoCardGrid';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <VideoCardGrid />
        </>
      ) : (
        <>
          <VideoCardGrid />
        </>
      )}
    </section>
  );
}

export default HomePage;
