import React from 'react';
import { Link } from 'react-router-dom';

function YouTubeVideoCard(item) {
  const { video } = item;

  return (
    <div>
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </Link>
      <div>
        <article>
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </article>
      </div>
    </div>
  );
}

export default YouTubeVideoCard;
