import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
} from './Home.styles';
import { useAuth } from '../../providers/Auth';
import { toggleSideNav } from '../../components/SideNav';
import thumbnail from '../../images/thumb.jpg';
import { storage } from '../../utils/storage';

function Main() {
  const { state, setState } = useAuth();
  const history = useHistory();
  const { sidenav, videos } = state;
  const currentPath = history.location.pathname;
  const title = currentPath === '/favorites' ? 'Favorites' : 'Trending';
  const storagedVideos = storage.get('localVideoStoraged');
  const videoList =
    (currentPath === '/favorites'
      ? videos.filter((video) => video.isFavorite) ||
        storagedVideos.video.filter((video) => video.isFavorite)
      : videos) || new Array(16).fill(null);

  let swipeStart;
  let swipeEnd;

  function handleSwipe() {
    if (swipeEnd > swipeStart + 100 && !sidenav) {
      toggleSideNav({ state, setState });
    } else if (swipeStart > swipeEnd + 100 && sidenav) {
      toggleSideNav({ state, setState });
    }
  }

  function touchStart(event) {
    const lastTouchIndex = event.changedTouches.length - 1;
    swipeStart = event.changedTouches[lastTouchIndex].screenX;
  }

  function touchEnd(event) {
    const lastTouchIndex = event.changedTouches.length - 1;
    swipeEnd = event.changedTouches[lastTouchIndex].screenX;
    handleSwipe();
  }

  function handleOnSelectVideo(videoId) {
    setState({
      ...state,
      currentVideoId: videoId,
    });

    if (currentPath === '/favorites') {
      history.push(`/favorites/${videoId}`);
    } else {
      history.push(`/video/${videoId}`);
    }
  }

  useEffect(() => {
    setState({
      ...state,
      videos,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  const ExampleVideos = (props) => {
    return (
      <VideoContainer onClick={() => handleOnSelectVideo(props.video.videoId)}>
        <ThumbnailContainer duration={props.video ? props.video.duration : '00:15:30'}>
          <img src={props.video ? props.video.thumbnail : thumbnail} alt="Thumbnail" />
        </ThumbnailContainer>
        <InfoContainer>
          <div>
            <VideoName>{props.video ? props.video.title : 'videoTitle'}</VideoName>
            <ChannelName>
              {props.video ? props.video.channelTitle : 'Channel Name'}
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
      <Title>{title}</Title>
      <Videos>
        {videoList.map((video, index) => (
          <ExampleVideos key={video?.videoId || index} index={index} video={video} />
        ))}
      </Videos>
    </Container>
  );
}

export default Main;
