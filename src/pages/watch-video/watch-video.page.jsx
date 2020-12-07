import React, { useContext } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarRateIcon from '@material-ui/icons/StarRate';

import { VideosContext } from '../../providers/videos';
import { FavoritesContext } from '../../providers/favorites';

import {
  addVideoToFavorites,
  removeVideoFromFavorites,
} from '../../providers/favorites/favorites.actions';
import SuggestedVideoCard from '../../components/suggested-video-card';

import {
  WatchVideoContainer,
  PrincipalContianer,
  SecondaryContainer,
  Video,
  VideoInformation,
  PrimaryVideoDetails,
  FavoritesAction,
  FavoritesActionIconContainer,
  ChannelInformation,
  ChannelHeader,
  ChannelAvatar,
  ChannelHeaderInformation,
  ChannelDescription,
} from './watch-video.styles';

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
    <WatchVideoContainer>
      <PrincipalContianer>
        <div className='video-container'>
          <Video
            className='video'
            allowFullScreen
            frameBorder='0'
            title='rick roll'
            src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          />
        </div>
        <VideoInformation>
          <h3>{title}</h3>
          <PrimaryVideoDetails>
            <div>
              <p>
                {views} views • {timestamp}
              </p>
            </div>
            <div>
              <FavoritesAction>
                {favoritesVideos[videoId] ? (
                  <FavoritesActionIconContainer title='Remove from favorites'>
                    <StarRateIcon
                      fontSize='large'
                      onClick={handleRemoveFavoriteVideoOnClick}
                    />
                  </FavoritesActionIconContainer>
                ) : (
                  <FavoritesActionIconContainer title='Add to favorites'>
                    <StarOutlineIcon
                      fontSize='large'
                      onClick={handleAddFavoriteVideoOnClick}
                    />
                  </FavoritesActionIconContainer>
                )}
              </FavoritesAction>
            </div>
          </PrimaryVideoDetails>
        </VideoInformation>
        <ChannelInformation>
          <ChannelHeader>
            <ChannelAvatar className='avatar' alt={channelTitle} src={channelImage} />
            <ChannelHeaderInformation>
              <h4>{channelTitle}</h4>
              <p>{channelSubscribers} subscribers</p>
            </ChannelHeaderInformation>
          </ChannelHeader>
          <ChannelDescription>
            <p>{channelDescription}</p>
          </ChannelDescription>
        </ChannelInformation>
      </PrincipalContianer>
      <SecondaryContainer>
        <div>
          {Object.keys(videos).map((videoKey) => {
            const { etag } = videos[videoKey];
            return <SuggestedVideoCard key={etag} video={videos[videoKey]} />;
          })}
        </div>
      </SecondaryContainer>
    </WatchVideoContainer>
  );
};

export default WatchVideoPage;
