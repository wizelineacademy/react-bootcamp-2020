import React from 'react';
import { useHistory } from 'react-router-dom';
import { VideoContainer, VideoTitle, VideoThumbnail, VideoDate } from './RelatedVideo.template'

function RelatedVideo({ video }) {
  const history = useHistory();

  const goToVideo = () => {
    history.push(`/player/${video.id}`);
  };

  return (
    <VideoContainer>
      <VideoThumbnail
        onClick={goToVideo}
        src={video.thumbnail}
        alt={video.title}
      />
      <VideoTitle onClick={goToVideo}>
        {video.title}
      </VideoTitle>
      <VideoDate >{video.publishedAt}</VideoDate>
    </VideoContainer>
  );
}

export default RelatedVideo;
