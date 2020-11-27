import React from 'react';
import { Link } from 'react-router-dom';

import './suggested-video-card.styles.scss';

function SuggestedVideoCard({ image, title, channelTitle, views, timestamp, videoId }) {
  const LINK_ID_VIDEO = `/wv/${videoId}`;
  return (
    <div className='suggested-video-card-container'>
      <Link to={LINK_ID_VIDEO}>
        <img className='thumbnail' src={image} alt='' />
      </Link>
      <div className='info'>
        <Link to={LINK_ID_VIDEO}>
          <h4>{title}</h4>
        </Link>
        <p>{channelTitle}</p>
        <p>
          {views} views • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default SuggestedVideoCard;
