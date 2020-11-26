import React from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import './video-home-card.styles.scss';

function VideoHomeCard({
  videoId,
  image,
  title,
  channelTitle,
  channelImage,
  views,
  timestamp,
  history,
  match,
}) {
  return (
    <div className='video-home-card-container'>
      <img
        className='thumbnail'
        src={image}
        alt=''
        onClick={() => history.push(`${match.url}wv/${videoId}`)}
      />
      <div className='info'>
        <Avatar className='avatar' alt={channelTitle} src={channelImage} />
        <div className='text'>
          <h4 onClick={() => history.push(`${match.url}wv/${videoId}`)}>{title}</h4>
          <p>{channelTitle}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(VideoHomeCard);
