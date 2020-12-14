import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import VideoReproducer from '../../components/VideoReproducer';
import RelatedVideoList from '../../components/RelatedVideosList';
import './Reproducer.style.css';
import VideoSelectedContext from '../../state/VideoSelectedContext';

function getVideoID(search) {
  const idRegex = new RegExp(/id\s*=\s*([\S\s]+)/);
  const videoId = idRegex.exec(search);
  return videoId[1];
}

function Reproducer() {
  const { setVideoIdFn } = React.useContext(VideoSelectedContext);

  const history = useHistory();
  const videoIdParam = history.location.search;
  const videoId = getVideoID(videoIdParam);

  useEffect(() => {
    function updateVideoIdContext() {
      setVideoIdFn(videoId);
    }
    updateVideoIdContext();
  }, [videoId, setVideoIdFn]);

  return (
    <section className="reproducer">
      <VideoReproducer />
      <RelatedVideoList />
    </section>
  );
}

export default Reproducer;
