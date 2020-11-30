import React from 'react';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from '../../components/YouTube/YouTubeVideoCard.component';

export default function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const { videos, isLoaded, error } = useYouTubeDataAPI('videos', 'list', {
    id: favorites.toString(),
  });

  if (favorites === []) {
    return <div>No videos were added as favorites yet.</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="favoritespage">
      <div>
        {(videos || []).map((video) => (
          <YouTubeVideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </section>
  );
}
