import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  PageContent,
  VideoList,
  VideoContent,
  VideoInformationContainer,
} from './VideoPlayer.styles';
import { useAppDataContext } from '../../providers/AppData';
import VideoCardSmall from '../../components/VideoCardSmall';
import { useAuth } from '../../providers/Auth';
import actions from '../../state/actions';
import { useSingleVideo } from '../../utils/hooks/useSingleVideo';
import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';

const VideoPlayer = () => {
  const { state, dispatch } = useAppDataContext();
  const { authenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState();

  const { idVideo } = useParams();

  useEffect(() => {
    setIsFavorite(state.favorites.some((video) => video.id === idVideo));
  }, [state.favorites, idVideo]);

  useRelatedVideos(idVideo);
  useSingleVideo(idVideo);


  const toggleFavorite = () => {
    dispatch({ type: actions.TOGGLE_FAVORITE, payload: idVideo });
  };

  const { videos, currentVideo ={} } = state;

  return (
    <PageContent>
      <VideoContent>
        <iframe
          title="youtube-player"
          id="player"
          type="text/html"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${idVideo}?enablejsapi=1`}
          frameBorder="0"
        />
        <div className="fav-bar" />
        <div className="fav-button-container">
          {authenticated ? (
            <button
              className={isFavorite ? 'fav' : 'no-fav'}
              type="button"
              onClick={toggleFavorite}
            >
              <span>{isFavorite ? 'REMOVE' : 'ADD'} FAVORITES</span>
              <FontAwesomeIcon icon={faStar} />
            </button>
          ) : null}
        </div>
        <VideoInformationContainer>
          <h2> { currentVideo.title || null}</h2>
          <p> {currentVideo.description || null}</p>
        </VideoInformationContainer>
      </VideoContent>
      <VideoList >
        {videos
          ? videos.map((video) => <VideoCardSmall video={video} key={video.id} />)
          : null}
      </VideoList>
    </PageContent>
  );
};

export default VideoPlayer;
