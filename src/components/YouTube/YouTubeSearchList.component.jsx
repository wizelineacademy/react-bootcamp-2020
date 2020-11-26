import React from 'react';
import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from './YouTubeVideoCard.component';

function YouTubeSearchList() {
  // @todo refactor to have the search keywords coming either from props or context
  const { videos, isLoaded, error } = useYouTubeDataAPI('search', 'list', {
    q: 'wizeline academy',
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {(videos || []).map((video) => (
        <YouTubeVideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default YouTubeSearchList;
