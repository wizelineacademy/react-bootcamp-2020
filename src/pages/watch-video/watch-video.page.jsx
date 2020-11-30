import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';

import { VideosContext } from '../../providers/videos';
import SuggestedVideoCard from '../../components/suggested-video-card';

import './watch-video.styles.scss';

const WatchVideoPage = ({
  match: {
    params: { videoId },
  },
}) => {
  const { videosState } = useContext(VideosContext);
  const { videos, channels } = videosState;

  const { title, views, timestamp, channelId } = videos[videoId];
  const channel = channels[channelId];
  const { title: channelTitle, image: channelImage } = channel;

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
          {Object.keys(videos).map((videoKey) => {
            const { etag, ...otherVideoProps } = videos[videoKey];
            return (
              <SuggestedVideoCard
                key={etag}
                {...otherVideoProps}
                channel={channels[otherVideoProps.channelId]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchVideoPage;
