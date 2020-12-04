import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  PageContent,
  VideoList,
  VideoContent,
  VideoInformationContainer,
} from './VideoPlayer.styles';
import { useAppDataContext } from '../../providers/AppData';
import { useSingleVideoAndRelated } from '../../utils/hooks/useSingleVideoAndRelated';
import VideoCardSmall from '../../components/VideoCardSmall';
import { useAuth } from '../../providers/Auth';
import actions from '../../state/actions';

const VideoPlayer = () => {
  const { state, dispatch } = useAppDataContext();
  const { authenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState();

  const { idVideo } = useParams();

  useEffect(() => {
    setIsFavorite(state.favorites.some((video) => video.id === idVideo));
  }, [state.favorites, idVideo]);

  useSingleVideoAndRelated(idVideo);

  const { theme } = useContext(ThemeContext);

  const toggleFavorite = () => {
    dispatch({ type: actions.TOGGLE_FAVORITE, payload: idVideo });
  };
  const toggleFavoriteByKey = ({ key }) => {
    if (key === 'Enter') {
      console.log();
      dispatch({ type: actions.TOGGLE_FAVORITE, payload: idVideo });
    }
  };

  const { videos, currentVideo } = state;

  return (
    <PageContent>
      <VideoContent>
        <iframe
          title="youtube-player"
          id="player"
          type="text/html"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${idVideo}?enablejsapi=1`}
          frameBorder="0"
        />
        <div className="fav-bar" />
        <div className="fav-button-container">
          {authenticated ? (
            <button
              className={isFavorite ? 'fav' : 'no-fav'}
              type="button"
              onClick={toggleFavorite}
              onKeyDown={toggleFavoriteByKey}
            >
              {isFavorite ? <span>REMOVE FAVORITES</span> : <span>ADD FAVORITES</span>}
              <FontAwesomeIcon icon={faStar} />
            </button>
          ) : null}
        </div>
        <VideoInformationContainer>
          <h2> {currentVideo ? currentVideo.title : null}</h2>
          <p> {currentVideo ? currentVideo.description : null}</p>
        </VideoInformationContainer>
      </VideoContent>
      <VideoList theme={theme}>
        {videos
          ? videos
              .filter((video) => video.id !== idVideo)
              .map((video) => <VideoCardSmall video={video} key={video.id} />)
          : null}
      </VideoList>
    </PageContent>
  );
};

export default VideoPlayer;
