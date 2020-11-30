import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from 'styled-components';
import {
  PageContent,
  VideoList,
  VideoContent,
  VideoInformationContainer,
} from './VideoPlayer.styles';
import { useAppDataContext } from '../../providers/AppData';
import { useSingleVideoAndRelated } from '../../utils/hooks/useSingleVideoAndRelated';
import VideoCardSmall from '../../components/VideoCardSmall';
import actions from '../../state/actions';

const VideoPlayer = () => {
  const { state, dispatch } = useAppDataContext();

  const { idVideo } = useParams();
  useSingleVideoAndRelated(idVideo);

  useEffect(() => {
    dispatch({ type: actions.SET_CURRENT_VIDEO, payload: idVideo });
  }, [dispatch, idVideo]);
  const { theme } = useContext(ThemeContext);

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
        <VideoInformationContainer>
          <h2> {currentVideo ? currentVideo.title : null}</h2>
          <p> {currentVideo ? currentVideo.description : null}</p>
        </VideoInformationContainer>
      </VideoContent>
      <VideoList theme={theme}>
        {videos
          ? videos
              .filter((video) => video.id !== idVideo)
              .map((video) => (
                <VideoCardSmall  video={video} key={video.id} />
              ))
          : null}
      </VideoList>
    </PageContent>
  );
};

export default VideoPlayer;
