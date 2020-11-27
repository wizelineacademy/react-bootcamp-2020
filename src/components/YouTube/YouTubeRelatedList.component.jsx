import React from 'react';
import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from './YouTubeVideoCard.component';

export default function YouTubeRelatedList(props) {
  const { videos, isLoaded, error } = useYouTubeDataAPI('search', 'list', {
    relatedToVideoId: props.id,
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
