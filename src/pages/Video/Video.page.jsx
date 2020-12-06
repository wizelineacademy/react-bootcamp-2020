import React from 'react';
import VideoWatch from '../../components/VideoWatch';
import { items } from '../../mock/mockedData';

function Video() {
  const currentVideo = items[0];
  const filteredItems = items.filter((item) => item.etag !== currentVideo.etag);

  return <VideoWatch currentVideo={currentVideo} items={filteredItems} />;
}

export default Video;
