import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './Video.styles';
import VideoList from '../../components/Video/VideoList/VideoList.component';
import VideoDetail from '../../components/Video/VideoDetail/VideoDetail.component';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

function Video() {
  const history = useHistory();
  const { state, setState } = useAuth();
  const { videos, selectedVideo, currentVideoId } = state;

  const handlePlayList = (videoId) => {
    const storagedVideos = storage.get('localVideoStoraged');

    const newFavorite = videos.map((video) => {
      if (video.videoId === videoId) {
        // eslint-disable-next-line no-param-reassign
        video.isFavorite = !video.isFavorite;
      }
      return video;
    });

    setState({
      ...state,
      videos: newFavorite,
    });

    storagedVideos.videos = newFavorite;
    storage.set('localVideoStoraged', storagedVideos);
  };

  const handleOnChangeVideo = (newVideoId) => {
    setState({
      ...state,
      currentVideoId: newVideoId,
    });
    history.push(`/video/${newVideoId}`);
  };

  useEffect(() => {
    if (videos || currentVideoId) {
      const { title, channelTitle, description, videoId, isFavorite } = videos.find(
        (video) =>
          video.videoId ===
          (currentVideoId || history.location.pathname.replace('/video/', ''))
      );

      setState({
        ...state,
        currentVideoId,
        selectedVideo: {
          videoId,
          title,
          channelTitle,
          description,
          isFavorite,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoId, videos]);

  return (
    <Container>
      <VideoDetail selectedVideo={selectedVideo} handlePlayList={handlePlayList} />
      <VideoList videos={videos} handleOnChangeVideo={handleOnChangeVideo} />
    </Container>
  );
}

export default Video;
