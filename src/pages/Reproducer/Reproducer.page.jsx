import React from 'react';

import VideoReproducer from '../../components/VideoReproducer';
import RelatedVideoList from '../../components/RelatedVideosList';
import './Reproducer.style.css';

function Reproducer() {
  // has to receive video id of selected item
  // has to fetch video data https://youtube.googleapis.com/youtube/v3/videos?part=player&id=hY7m5jjJ9mM
  return (
    <section className="reproducer">
      <VideoReproducer />
      <RelatedVideoList />
    </section>
  );
}

export default Reproducer;
