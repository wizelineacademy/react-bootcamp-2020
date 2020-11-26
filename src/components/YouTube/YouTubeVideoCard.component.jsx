import React from 'react';
import { Link } from 'react-router-dom';

function YouTubeVideoCard(item) {
  const { video } = item;

  return (
    <div>
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </Link>
    </div>
  );
}

export default YouTubeVideoCard;
