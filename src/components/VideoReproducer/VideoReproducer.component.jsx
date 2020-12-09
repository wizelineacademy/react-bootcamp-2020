/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ReproducerWrapper, Reproducer, VideoInformation } from './VideoReproducer.style';
import './VideoReproducer.style.css';

import { useYoutubeVideo } from '../../utils/hooks/useYoutubeVideo';
// import { useChannel } from '../../utils/hooks/useChannel';

// To add channel image, has to call Channel endpoint with ID

function getVideoID(search) {
  const idRegex = new RegExp(/id\s*=\s*([\S\s]+)/);
  const videoId = idRegex.exec(search);
  return videoId[1];
}

function VideoReproducer() {
  const [videoInformation, setVideoInformation] = React.useState({});
  //   const [channelId, setChannelId] = React.useState('');
  //   const [channelInformation, setChannelInformation] = React.useState({});
  const history = useHistory();
  const videoIdParam = history.location.search;
  const videoId = getVideoID(videoIdParam);

  const { videoSelected, isVideoRequestSuccessful, isVideoLoading } = useYoutubeVideo(
    videoId
  );
  //   const { channelInfo, isChannelRequestSuccessful, isChannelLoading } = useChannel(
  //     channelId
  //   );

  useEffect(() => {
    setVideoInformation(videoSelected);
  }, [videoSelected]);

  //   useEffect(() => {
  //     if (!isVideoLoading) {
  //       console.log(`setting id ${videoInformation.snippet.channelId}`);
  //       setChannelId(videoInformation.snippet.channeld);
  //     }
  //   }, [isVideoLoading, videoInformation]);

  //   useEffect(() => {
  //     setChannelInformation(channelInfo);
  //   }, [channelId]);

  return (
    <>
      {!isVideoLoading ? (
        isVideoRequestSuccessful ? (
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
              {/* <div className="channel">
                <img
                  className="channelImage"
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIJZKqH3FkWGKNP-OufNVlj7qHMVzPtIItQ8DYOg=s88-c-k-c0x00ffffff-no-rj"
                  alt="Channel avatar"
                />
                <p className="channelName">Warner Brothers</p>
              </div> */}
              <p className="datePublished">{videoInformation.snippet.publishedAt}</p>
              <p className="description">{videoInformation.snippet.description}</p>
            </VideoInformation>
          </ReproducerWrapper>
        ) : (
          <h1> Unable to retrieve video reproducer</h1>
        )
      ) : (
        <h1> Loading...</h1>
      )}
    </>
  );
}

export default VideoReproducer;
