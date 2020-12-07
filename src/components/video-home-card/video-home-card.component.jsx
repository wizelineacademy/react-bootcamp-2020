import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import { VideosContext } from '../../providers/videos';
import { setVideoToWatch } from '../../providers/videos/videos.actions';

import './video-home-card.styles.scss';

function VideoHomeCard({ video }) {
  const { videosDispatch } = useContext(VideosContext);
  const {
    videoId,
    image,
    title,
    views,
    timestamp,
    channel: { title: channelTitle, image: channelImage },
  } = video;

  const handleMoveToWatchVideoOnClick = () => {
    videosDispatch(setVideoToWatch(video));
  };

  return (
    <div className='video-home-card-container'>
      <Link to={`wv/${videoId}`} onClick={handleMoveToWatchVideoOnClick}>
        <img className='thumbnail' src={image} alt='' />
      </Link>

      <div className='info'>
        <Avatar className='avatar' alt={channelTitle} src={channelImage} />
        <div className='text'>
          <Link to={`wv/${videoId}`} onClick={handleMoveToWatchVideoOnClick}>
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

export default VideoHomeCard;
