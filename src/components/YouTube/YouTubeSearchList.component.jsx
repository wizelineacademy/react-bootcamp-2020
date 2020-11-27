import React, { useContext } from 'react';

import SearchContext from '../../state/SearchContext';
import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from './YouTubeVideoCard.component';

function YouTubeSearchList() {
  const { search } = useContext(SearchContext);
  const { videos, isLoaded, error } = useYouTubeDataAPI('search', 'list', {
    q: search,
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
