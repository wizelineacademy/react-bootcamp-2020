import React from 'react';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import FavoriteButton from '../Favorites/FavoriteButton.component';

export default function YouTubeVideoArticle(props) {
  const { videos, isLoaded, error } = useYouTubeDataAPI('videos', 'list', {
    id: props.id,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!videos[0]) {
    return <div>No video</div>;
  }

  return (
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: videos[0].player.embedHtml }} />
      <FavoriteButton id={props.id} />
      <h2>{videos[0].snippet.title}</h2>
      <p>{videos[0].snippet.description}</p>
    </div>
  );
}
