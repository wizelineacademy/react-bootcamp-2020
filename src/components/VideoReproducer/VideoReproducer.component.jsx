// import React, { useEffect } from 'react';
import React, { useEffect } from 'react';

import { useAuth } from '../../providers/Auth';

import {
  ReproducerWrapper,
  Reproducer,
  VideoInformation,
  ActionArea,
} from './VideoReproducer.style';
import { SecondaryButton } from '../../styledComponents';
import VideoSelectedContext from '../../state/VideoSelectedContext';
import './VideoReproducer.style.css';
import { useYoutubeVideo } from '../../utils/hooks/useYoutubeVideo';
import FavoritesContext from '../../state/FavoritesContext';

// --- DEV mocked setup --- ///
// import videoResultMocked from '../../utils/videoResultMocked.json';
// --- End of DEV mocked setup --- ///

function sliceDate(strDate) {
  return strDate.slice(0, 10);
}

// function VideoReproducer({ setCurrentVideo }) {
//   const { authenticated } = useAuth();
//   const { setVideoIdFn } = useContext(VideoSelectedContext);
function VideoReproducer() {
  // --- DEV mocked setup --- ///
  // eslint-disable-next-line no-unused-vars
  // const [videoInformation, setVideoInformation] = React.useState(
  //   videoResultMocked.items[0]
  // );
  // const isVideoRequestSuccessful = true;
  // const isVideoLoading = false;

  // const videoSelected = videoResultMocked.items[0];
  // --- End of DEV mocked setup --- ///

  const { authenticated } = useAuth();
  const { videoId } = React.useContext(VideoSelectedContext);
  const { favoriteVideoList, addFavoritesFn } = React.useContext(FavoritesContext);

  // --- PROD code --- //
  const [videoInformation, setVideoInformation] = React.useState({});
  // --- DEV + PROD Code --- //
  const [isVideoFavorite, setIsVideoFavorite] = React.useState(false);
  // --- End DEV + PROD Code --- //
  const { videoSelected, isVideoRequestSuccessful, isVideoLoading } = useYoutubeVideo(
    videoId
  );

  useEffect(() => {
    function updateVideoInformation() {
      setVideoInformation(() => videoSelected);
    }
    function queryIsVideoFavorite() {
      const isOnFavorites = favoriteVideoList.find((element) => element.id === videoId);
      console.log(isOnFavorites);
      if (isOnFavorites === undefined) {
        setIsVideoFavorite(false);
      } else {
        setIsVideoFavorite(true);
      }
    }
    updateVideoInformation();
    queryIsVideoFavorite();
  }, [videoSelected, favoriteVideoList, videoId]);

  const addVideoToFavorites = (event) => {
    event.preventDefault();
    if (!isVideoFavorite) {
      addFavoritesFn(videoInformation);
    } else console.log('Already in favs');
  };

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
            <p className="channelInfo">{videoInformation.snippet.channelTitle}</p>
            <p className="datePublished">
              {`Published: ${sliceDate(videoInformation.snippet.publishedAt)}`}
            </p>
            <p className="description">{videoInformation.snippet.description}</p>
            {authenticated && (
              <ActionArea>
                <SecondaryButton
                  disabled={isVideoFavorite}
                  onClick={addVideoToFavorites}
                  type="button"
                >
                  Add to favorites
                </SecondaryButton>
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
