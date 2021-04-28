import React from 'react';

import ListVideoCard from '../../components/ListVideoCard/index';

import useVideoApi from '../../hooks/youtube.hook';

import { useVideosContext } from '../../context/context';

function HomePage() {
  const { state } = useVideosContext();
  useVideoApi(state.searchQuery);
  const { videos } = state;
  if (videos.lenght <= 0) return <div>Loading...</div>;

  return <ListVideoCard videos={videos} />;
}

export default HomePage;
