import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { VideosContext } from '../../providers/videos';
import { setVideoToWatch } from '../../providers/videos/videos.actions';

import {
  VideoHomeCardContianer,
  Thumbnail,
  CardInformation,
  Cardtext,
  CardAvatar,
} from './video-home-card.styles';

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
    <VideoHomeCardContianer>
      <Link to={`wv/${videoId}`} onClick={handleMoveToWatchVideoOnClick}>
        <Thumbnail className='thumbnail' src={image} alt='' />
      </Link>

      <CardInformation>
        <CardAvatar className='avatar' alt={channelTitle} src={channelImage} />
        <Cardtext>
          <Link to={`wv/${videoId}`} onClick={handleMoveToWatchVideoOnClick}>
            <h4>{title}</h4>
          </Link>
          <p>{channelTitle}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </Cardtext>
      </CardInformation>
    </VideoHomeCardContianer>
  );
}

export default VideoHomeCard;
