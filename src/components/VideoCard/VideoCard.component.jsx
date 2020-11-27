import React from 'react';

export default function VideoCard({ title, url, thumbnail }) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}
