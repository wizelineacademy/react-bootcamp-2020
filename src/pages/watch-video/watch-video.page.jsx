import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarRateIcon from '@material-ui/icons/StarRate';

import { VideosContext } from '../../providers/videos';
import { FavoritesContext } from '../../providers/favorites';

import {
  addVideoToFavorites,
  removeVideoFromFavorites,
} from '../../providers/favorites/favorites.actions';
import SuggestedVideoCard from '../../components/suggested-video-card';

import './watch-video.styles.scss';

const WatchVideoPage = () => {
  const { videosState } = useContext(VideosContext);
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  const { videos: favoritesVideos } = favoritesState;

  const { videos, videoToWatch } = videosState;

  const {
    videoId,
    title,
    views,
    timestamp,
    channel: {
      title: channelTitle,
      image: channelImage,
      subscribers: channelSubscribers,
      description: channelDescription,
    },
  } = videoToWatch;

  const handleAddFavoriteVideoOnClick = () => {
    favoritesDispatch(addVideoToFavorites(videoToWatch));
  };
  const handleRemoveFavoriteVideoOnClick = () => {
    favoritesDispatch(removeVideoFromFavorites(videoToWatch));
  };

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
          <div className='primary-video-details'>
            <div className='video-count-contianer'>
              <p>
                {views} views • {timestamp}
              </p>
            </div>
            <div className='actions-contianer'>
              <div className='favorites-action'>
                {favoritesVideos[videoId] ? (
                  <div title='Remove from favorites'>
                    <StarRateIcon
                      fontSize='large'
                      onClick={handleRemoveFavoriteVideoOnClick}
                    />
                  </div>
                ) : (
                  <div title='Add to favorites'>
                    <StarOutlineIcon
                      fontSize='large'
                      onClick={handleAddFavoriteVideoOnClick}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='channel-info'>
          <div className='header'>
            <Avatar className='avatar' alt={channelTitle} src={channelImage} />
            <div className='info'>
              <h4>{channelTitle}</h4>
              <p>{channelSubscribers} subscribers</p>
            </div>
          </div>
          <div className='channel-description'>
            <p>{channelDescription}</p>
          </div>
        </div>
      </div>
      <div className='secondary'>
        <div className='path-video-container'>
          {Object.keys(videos).map((videoKey) => {
            const { etag } = videos[videoKey];
            return <SuggestedVideoCard key={etag} video={videos[videoKey]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchVideoPage;
