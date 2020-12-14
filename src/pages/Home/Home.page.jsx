import React, { useRef } from 'react';

import YouTubeSearchList from '../../components/YouTube/YouTubeSearchList.component';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <YouTubeSearchList />
    </section>
  );
}

export default HomePage;
