import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

import {
  ReproducerWrapper,
  Reproducer,
  VideoInformation,
  ActionArea,
} from './VideoReproducer.style';
import { SecondaryButton } from '../../styledComponents';

import './VideoReproducer.style.css';

import { useYoutubeVideo } from '../../utils/hooks/useYoutubeVideo';


function getVideoID(search) {
  const idRegex = new RegExp(/id\s*=\s*([\S\s]+)/);
  const videoId = idRegex.exec(search);
  return videoId[1];
}
function sliceDate(strDate) {
  return strDate.slice(0, 10);
}

function VideoReproducer() {
  const { authenticated } = useAuth();
  const [videoInformation, setVideoInformation] = React.useState({});
  const history = useHistory();
  const videoIdParam = history.location.search;
  const videoId = getVideoID(videoIdParam);

  const { videoSelected, isVideoRequestSuccessful, isVideoLoading } = useYoutubeVideo(
    videoId
  );

  useEffect(() => {
    setVideoInformation(videoSelected);
  }, [videoSelected]);

  const renderReproducer = () => {
    if (isVideoRequestSuccessful)
      return (
        <ReproducerWrapper className="reproducer-wrapper">
          <Reproducer
            width="700"
            height="400"
            allowFullScreen
            frameBorder="0"
            title="rick roll"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
          <VideoInformation className="videoInformation">
            <p className="title">{videoInformation.snippet.title}</p>
            <p className="datePublished">
              {`Published: ${sliceDate(videoInformation.snippet.publishedAt)}`}
            </p>
            <p className="description">{videoInformation.snippet.description}</p>
            {authenticated && (
              <ActionArea>
                <SecondaryButton type="button">Add to favorites</SecondaryButton>
              </ActionArea>
            )}
          </VideoInformation>
        </ReproducerWrapper>
      );
    return <h1> Unable to retrieve video reproducer</h1>;
  };

  return <>{!isVideoLoading ? renderReproducer() : <h1> Loading...</h1>}</>;
}

export default VideoReproducer;
