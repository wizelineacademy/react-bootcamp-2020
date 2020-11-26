import React from 'react';

function YouTubeVideoCard(item) {
  const { video } = item;

  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
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
