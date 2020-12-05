import React from 'react';
import { Link } from 'react-router-dom';

import './VideoCard.styles.css';

export default function Video({ videoid, video }) {
  // console.log(video);
  return (
    <div className="videoCard">
      <div className="videoThumbnail">
        <Link to={`/watch/${videoid}`}>
          <img src={video.thumbnails.medium.url} alt={video.title} />
        </Link>
      </div>
      <div className="videoInfo">
        <div className="videoTitle">{video.title}</div>
        <div className="videoDescription">{video.description}</div>
        <div className="videoChannel">{video.channelTitle}</div>
      </div>
    </div>
  );
}
