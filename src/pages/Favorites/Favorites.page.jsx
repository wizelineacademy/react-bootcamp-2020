import React, { useRef, useContext } from 'react';
import Videos from '../../components/Videos';

import { VideoContext } from '../../providers/Video';

function FavoritesPage() {
  const sectionRef = useRef(null);
  const { videos } = useContext(VideoContext);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Good to have you back </h1>
      <Videos videos={videos} />
    </section>
  );
}

export default FavoritesPage;
