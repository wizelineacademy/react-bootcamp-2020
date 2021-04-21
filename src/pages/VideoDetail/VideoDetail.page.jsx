import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';
import VideoDetail from '../../components/VideoDetail/index';

import useVideoApi from '../../api/youtube.hook';

import { useVideosContext } from '../../context/context';

function VideoDetailPage({ toggleDrawer, isOpen, isFavourite }) {
  const sectionRef = useRef(null);
  const { id } = useParams();

  const { state, dispatch } = useVideosContext();
  useVideoApi(state.searchQuery);
  const { videos, favouriteVideos, currentVideo } = state;
  console.log(id, state);

  const onSelectedVideo = (video) => {
    dispatch({ type: '@set/current_video', payload: video });
  };

  return (
    <section ref={sectionRef}>
      <Header
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
        placeholder="Search..."
        mode="light"
      />
      <section className="grid grid-cols-7">
        <VideoDetail video={currentVideo} />
        <ListVideoCard
          onSelectedVideo={onSelectedVideo}
          videos={isFavourite ? favouriteVideos : videos}
          relatedCard={currentVideo}
        />
      </section>
    </section>
  );
}

export default VideoDetailPage;
