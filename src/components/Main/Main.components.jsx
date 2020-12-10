import React, { useEffect } from 'react';

import {
  Container,
  Title,
  VideoContainer,
  Videos,
  ThumbnailContainer,
  InfoContainer,
  VideoName,
  ChannelName,
  Description,
} from './Main.styles';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';
import { toggleSideNav } from '../SideNav';
import thumbnail from '../../images/thumb.jpg';
import Youtube from '../../utils/Youtube';

function Main() {
  const { state, setState } = useAuth();
  const { searchString, sidenav, isLoading, videos } = state;
  const localVideoStoraged = storage.get('localVideoStoraged');
  let swipeStart;
  let swipeEnd;

  useEffect(() => {
    async function fetchYoutubeData() {
      const videoList = await Youtube.get(searchString);
      const videoListBackup = {
        videos: videoList,
        searchString,
      };
      storage.set('localVideoStoraged', videoListBackup);
      setState({
        ...state,
        isLoading: false,
        videos: videoList,
      });
    }
    if (!isLoading && !localVideoStoraged?.videos) {
      fetchYoutubeData();
    } else {
      setState({
        ...state,
        videos: localVideoStoraged.videos,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchYoutubeData() {
      const videosFounded = await Youtube.get(searchString);
      setState({
        ...state,
        isLoading: false,
        videos: videosFounded,
      });
    }
    if (isLoading) fetchYoutubeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  function handleSwipe() {
    if (swipeEnd > swipeStart + 100 && !sidenav) {
      toggleSideNav({ state, setState });
    } else if (swipeStart > swipeEnd + 100 && sidenav) {
      toggleSideNav({ state, setState });
    }
  }

  function touchStart(e) {
    const lastTouchIndex = e.changedTouches.length - 1;
    swipeStart = e.changedTouches[lastTouchIndex].screenX;
  }

  function touchEnd(e) {
    const lastTouchIndex = e.changedTouches.length - 1;
    swipeEnd = e.changedTouches[lastTouchIndex].screenX;
    handleSwipe();
  }

  const ExampleVideos = (props) => {
    return (
      <VideoContainer>
        <ThumbnailContainer duration={props.video ? props.video.duration : '00:15:30'}>
          <img src={props.video ? props.video.thumbnail : thumbnail} alt="Thumbnail" />
        </ThumbnailContainer>
        <InfoContainer>
          <div>
            <VideoName>{props.video ? props.video.videoTitle : 'videoTitle'}</VideoName>
            <ChannelName>
              {props.video ? props.video.ChannelName : 'Channel Name'}
            </ChannelName>
            <Description>
              {props.video ? props.video.description : 'description'}
            </Description>
          </div>
        </InfoContainer>
      </VideoContainer>
    );
  };

  return (
    <Container onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <Title>Recomendados</Title>
      <Videos>
        {videos.map((video, index) => (
          <ExampleVideos key={video?.id || index} video={video} /> // temporary key until integration of youtube api
        ))}
      </Videos>
    </Container>
  );
}

export default Main;
