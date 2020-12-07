import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoWatch from '../../components/VideoWatch';
import DataContext from '../../state/DataContext';

function Video() {
  const { id, dataSource } = useParams();
  const { items, favItems } = useContext(DataContext);
  const localItems = dataSource === 'favorites' ? favItems : items;
  const filteredItems = localItems.filter((item) => item.id.videoId !== id);
  const currentVideo = localItems.filter((item) => item.id.videoId === id);
  return (
    <VideoWatch currentVideo={currentVideo} items={filteredItems} dataId={dataSource} />
  );
}

export default Video;
