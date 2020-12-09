// import React, { useEffect, useContext} from 'react';
import React from 'react';

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

// import { useYoutubeVideo } from '../../utils/hooks/useYoutubeVideo';
// import { useChannel } from '../../utils/hooks/useChannel';

// --- DEV mocked setup --- ///
import videoResultMocked from '../../utils/videoResultMocked.json';
// --- End of DEV mocked setup --- ///

function getVideoID(search) {
  const idRegex = new RegExp(/id\s*=\s*([\S\s]+)/);
  const videoId = idRegex.exec(search);
  return videoId[1];
}
function sliceDate(strDate) {
  return strDate.slice(0, 10);
}

function VideoReproducer() {
  // --- DEV mocked setup --- ///
  // eslint-disable-next-line no-unused-vars
  const [videoInformation, setVideoInformation] = React.useState(
    videoResultMocked.items[0]
  );
  const isVideoRequestSuccessful = true;
  const isVideoLoading = false;
  // --- End of DEV mocked setup --- ///

  // --- TODO: Call channel endpoint to retrieve name and avatar image
  //   const [channelId, setChannelId] = React.useState('');
  //   const [channelInformation, setChannelInformation] = React.useState({});
  //   const { channelInfo, isChannelRequestSuccessful, isChannelLoading } = useChannel(
  //     channelId
  //   );
  //   useEffect(() => {
  //     if (!isVideoLoading) {
  //       console.log(`setting id ${videoInformation.snippet.channelId}`);
  //       setChannelId(videoInformation.snippet.channeld);
  //     }
  //   }, [isVideoLoading, videoInformation]);

  //   useEffect(() => {
  //     setChannelInformation(channelInfo);
  //   }, [channelId]);
  // --- End of TODO ---
  const { authenticated } = useAuth();
  // const [videoInformation, setVideoInformation] = React.useState({});
  const history = useHistory();
  const videoIdParam = history.location.search;
  const videoId = getVideoID(videoIdParam);

  // const { videoSelected, isVideoRequestSuccessful, isVideoLoading } = useYoutubeVideo(
  //   videoId
  // );

  // useEffect(() => {
  //   setVideoInformation(videoSelected);
  // }, [videoSelected]);

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
