import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import SuggestedVideoCard from '../../components/suggested-video-card';

import './watch-video.styles.scss';
import { SummaryResult } from '../../utils/searchresult';

function WatchVideoPage(
  {
    match: {
      params: { videoId },
    },
  },
  selectedVideo,
  videos
) {
  selectedVideo = SummaryResult.find((v) => v.videoId === videoId);
  videos = SummaryResult;

  const { title, channelTitle, channelImage, views, timestamp, channel } = selectedVideo;

  return (
    <div className='watch-video-container'>
      <div className='principal'>
        <div className='video-container'>
          <iframe
            className='video'
            allowFullScreen
            frameBorder='0'
            title='rick roll'
            src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          />
        </div>
        <div className='video-info'>
          <h3>{title}</h3>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
        <div className='channel-info'>
          <div className='header'>
            <Avatar className='avatar' alt={channelTitle} src={channelImage} />
            <div className='info'>
              <h4>{channelTitle}</h4>
              <p>{channel.suscribers} subscribers</p>
            </div>
          </div>
          <div className='channel-description'>
            <p>{channel.description}</p>
          </div>
        </div>
      </div>
      <div className='secondary'>
        <div className='path-video-container'>
          {SummaryResult.map(({ etag, ...otherItemProps }) => (
            <SuggestedVideoCard key={etag} {...otherItemProps} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchVideoPage;
