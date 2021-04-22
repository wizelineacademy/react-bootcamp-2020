import React, { useRef } from 'react';
// import { useParams } from 'react-router-dom';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';
import VideoDetail from '../../components/VideoDetail/index';

import useVideoApi from '../../api/youtube.hook';

import { useVideosContext } from '../../context/context';
import useUser from '../../hooks/userUser';

function VideoDetailPage({ toggleDrawer, isOpen, isFavourite }) {
  const sectionRef = useRef(null);
  // const { id } = useParams();
  const { isLogged } = useUser();

  const { state, dispatch } = useVideosContext();
  useVideoApi(state.searchQuery);
  const { videos, favouriteVideos, currentVideo } = state;
  // const favourites = JSON.parse(localStorage.getItem('favouriteVideos'));
  let videoCurrent = currentVideo;
  if (!currentVideo) {
    videoCurrent = JSON.parse(localStorage.getItem('currentVideo'));
  }

  const onSelectedVideo = (video) => {
    localStorage.setItem('currentVideo', JSON.stringify(video));
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
        <VideoDetail video={videoCurrent} isLogged={isLogged} />
        <ListVideoCard
          onSelectedVideo={onSelectedVideo}
          videos={isFavourite ? favouriteVideos : videos}
          relatedCard={videoCurrent}
        />
      </section>
    </section>
  );
}

export default VideoDetailPage;
