import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
  match,
}) {
  return (
    <div className='video-home-card-container'>
      <Link to={`${match.url}wv/${videoId}`}>
        <img className='thumbnail' src={image} alt='' />
      </Link>

      <div className='info'>
        <Avatar className='avatar' alt={channelTitle} src={channelImage} />
        <div className='text'>
          <Link to={`${match.url}wv/${videoId}`}>
            <h4>{title}</h4>
          </Link>
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
