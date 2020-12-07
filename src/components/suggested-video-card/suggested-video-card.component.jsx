import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideosContext } from '../../providers/videos';
import { setVideoToWatch } from '../../providers/videos/videos.actions';

import {
  SuggestedVideoCardContainer,
  Thumbnail,
  CardInformation,
} from './suggested-video-card.styles';

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
    <SuggestedVideoCardContainer>
      <Link to={LINK_ID_VIDEO} onClick={handleMoveToWatchVideoOnClick}>
        <Thumbnail className='thumbnail' src={image} alt='' />
      </Link>
      <CardInformation>
        <Link to={LINK_ID_VIDEO} onClick={handleMoveToWatchVideoOnClick}>
          <h4>{title}</h4>
        </Link>
        <p>{channelTitle}</p>
        <p>
          {views} views • {timestamp}
        </p>
      </CardInformation>
    </SuggestedVideoCardContainer>
  );
}

export default SuggestedVideoCard;
