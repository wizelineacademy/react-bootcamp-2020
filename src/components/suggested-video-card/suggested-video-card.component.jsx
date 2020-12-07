import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideosContext } from '../../providers/videos';
import { setVideoToWatch } from '../../providers/videos/videos.actions';

import './suggested-video-card.styles.scss';

function SuggestedVideoCard({ video }) {
  const { videosDispatch } = useContext(VideosContext);
  const {
    videoId,
    image,
    title,
    views,
    timestamp,
    channel: { title: channelTitle },
  } = video;

  const handleMoveToWatchVideoOnClick = () => {
    videosDispatch(setVideoToWatch(video));
  };

  const LINK_ID_VIDEO = `/wv/${videoId}`;
  return (
    <div className='suggested-video-card-container'>
      <Link to={LINK_ID_VIDEO} onClick={handleMoveToWatchVideoOnClick}>
        <img className='thumbnail' src={image} alt='' />
      </Link>
      <div className='info'>
        <Link to={LINK_ID_VIDEO} onClick={handleMoveToWatchVideoOnClick}>
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
