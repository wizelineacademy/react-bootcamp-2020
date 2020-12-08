import React from 'react';

import {
  Container,
  Title,
  VideoContainer,
  Videos,
  ThumbnailContainer,
  Avatar,
  InfoContainer,
  VideoName,
  ChannelName,
  Details,
} from './Main.styles';
import { useAuth } from '../../providers/Auth';

import { toggleSideNav } from '../SideNav';
import thumbnail from '../../images/thumb.jpg';

function Main() {
  const { state, setState } = useAuth();
  const mockedVideo = new Array(15).fill(null);
  let swipeStart;
  let swipeEnd;

  function handleSwipe() {
    if (swipeEnd > swipeStart + 100 && !state.sidenav) {
      toggleSideNav({ state, setState });
    } else if (swipeStart > swipeEnd + 100 && state.sidenav) {
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

  const ExampleVideos = () => {
    return (
      <VideoContainer>
        <ThumbnailContainer duration="12:34">
          <img src={thumbnail} alt="Thumbnail" />
        </ThumbnailContainer>
        <InfoContainer>
          <Avatar />
          <div>
            <VideoName>Video Title</VideoName>
            <ChannelName>Channel Name</ChannelName>
            <Details>123 mil visualizaciones • hace 12 horas</Details>
          </div>
        </InfoContainer>
      </VideoContainer>
    );
  };

  return (
    <Container onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <Title>Recomendados</Title>
      <Videos>
        {mockedVideo.map(() => (
          <ExampleVideos key={Math.random()} /> // temporary key until integration of youtube api
        ))}
      </Videos>
    </Container>
  );
}

export default Main;
