import React from 'react';
import { useHistory } from 'react-router';

import ListVideoCard from '../../components/ListVideoCard/index';
import VideoDetail from '../../components/VideoDetail/index';

import useVideoApi from '../../hooks/youtube.hook';

import { useVideosContext } from '../../context/context';
import useUser from '../../hooks/userUser';

function VideoDetailPage({ isFavourite }) {
  const history = useHistory();
  const { isLogged } = useUser();

  const { state, dispatch } = useVideosContext();
  useVideoApi(state.searchQuery);
  const { videos, currentVideo } = state;
  const favourites = JSON.parse(window.localStorage.getItem('videosFavourites')) || [];
  let videoCurrent = currentVideo;
  if (!currentVideo) {
    videoCurrent = JSON.parse(window.localStorage.getItem('currentVideo'));
  }

  const onSelectedVideo = (video) => {
    window.localStorage.setItem('currentVideo', JSON.stringify(video));
    dispatch({ type: '@set/current_video', payload: video });
    return isFavourite
      ? history.push(`/favourites/video/${video.id.videoId}`)
      : history.push(`/video/${video.id.videoId}`);
  };

  return (
    <>
      <div className="grid grid-cols-7">
        <VideoDetail video={videoCurrent} isLogged={isLogged} />
        <ListVideoCard
          onSelectedVideo={onSelectedVideo}
          videos={isFavourite ? favourites : videos}
          relatedCard={videoCurrent}
        />
      </div>
    </>
  );
}

export default VideoDetailPage;
