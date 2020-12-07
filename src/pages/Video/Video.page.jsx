import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoWatch from '../../components/VideoWatch';
import DataContext from '../../state/DataContext';

function Video() {
  const { id } = useParams();
  const { items } = useContext(DataContext);
  const filteredItems = items.filter((item) => item.id.videoId !== id);
  const currentVideo = items.filter((item) => item.id.videoId === id);
  return <VideoWatch currentVideo={currentVideo} items={filteredItems} />;
}

export default Video;
