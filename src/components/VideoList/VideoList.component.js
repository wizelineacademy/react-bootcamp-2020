import React, { useContext } from 'react';

import MainPane from '../MainPane';
import VideoItem from '../VideoItem';
import { VideoListPane } from './VideoList.component.styled';
import VideoContext from '../../state/videoContext';

function VideoList(props) {
  const { dispatch } = useContext(VideoContext);

  const handleClick = (video) => () => {
    dispatch({ type: 'SET_VIDEO', payload: video });
  };

  console.log(props);
  const videos = props.videosParam;

  return (
    <MainPane>
      <VideoListPane>
        {videos &&
          videos.map((video, index) => (
            <VideoItem
              title={video.snippet.title}
              covers={video.snippet.thumbnails.default.url}
              id={index}
              key={video.etag}
              onVideoClick={handleClick(video)}
            />
          ))}
      </VideoListPane>
    </MainPane>
  );
}

export default VideoList;
