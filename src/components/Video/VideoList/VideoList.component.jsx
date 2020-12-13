import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../VideoItem/VideoItem.component';
import { ListContainer } from './VideoList.styles';
import { storage } from '../../../utils/storage';

function VideoList({ videos, handleOnChangeVideo }) {
  const storagedVideos = storage.get('localVideoStoraged');
  const history = useHistory();
  const currentPath = history.location.pathname;
  const videoList =
    (currentPath.includes('/favorites')
      ? videos.filter((video) => video.isFavorite) ||
        storagedVideos.video.filter((video) => video.isFavorite)
      : videos) || null;
  const list = videoList?.map((video) => (
    <VideoItem
      key={video?.videoId}
      video={video}
      handleOnChangeVideo={handleOnChangeVideo}
    />
  ));
  return <ListContainer>{list}</ListContainer>;
}

export default React.memo(VideoList);
