import React from 'react';

import VideoReproducer from '../../components/VideoReproducer';
import RelatedVideoList from '../../components/RelatedVideosList';
import './Reproducer.style.css';

function Reproducer() {
  const [reproductionVideoId, setReproductionVideo] = React.useState();

  const setCurrentVideo = (newVideo) => {
    console.log(newVideo);
    setReproductionVideo(newVideo);
  };

  // has to receive video id of selected item
  // has to fetch video data https://youtube.googleapis.com/youtube/v3/videos?part=player&id=hY7m5jjJ9mM
  // pass on props from video reproducer to related video list
  return (
    <section className="reproducer">
      <VideoReproducer setCurrentVideo={setCurrentVideo} />
      <RelatedVideoList videoId={reproductionVideoId} />
    </section>
  );
}

export default Reproducer;
