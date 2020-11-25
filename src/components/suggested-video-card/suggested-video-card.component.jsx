import React from 'react';
import { withRouter } from 'react-router-dom';

import './suggested-video-card.styles.scss';

function SuggestedVideoCard({
  image,
  title,
  channelTitle,
  views,
  timestamp,
  videoId,
  history,
  match,
}) {
  return (
    <div className='suggested-video-card-container'>
      <img
        className='thumbnail'
        src={image}
        alt=''
        onClick={() => history.push(`/wv/${videoId}`)}
      />
      <div className='info'>
        <h4 onClick={() => history.push(`/wv/${videoId}`)}>{title}</h4>
        <p>{channelTitle}</p>
        <p>
          {views} views • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default withRouter(SuggestedVideoCard);
