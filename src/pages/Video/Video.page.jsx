import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import VideoWatch from '../../components/VideoWatch';
import DataContext from '../../state/DataContext';
import FavoritesContext from '../../state/FavoritesContext';

function Video() {
  const { id } = useParams();
  const dataSource = useLocation().pathname.split('/')[2];
  const { state } = useContext(FavoritesContext);
  const { favorites } = state;
  const { items } = useContext(DataContext);
  const localItems = dataSource === 'favorites' ? favorites : items;
  const filteredItems = localItems.filter((item) => item.id.videoId !== id);
  const currentVideo = localItems.filter((item) => item.id.videoId === id);
  return (
    <VideoWatch currentVideo={currentVideo} items={filteredItems} dataId={dataSource} />
  );
}

export default Video;
