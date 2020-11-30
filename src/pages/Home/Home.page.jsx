import React from 'react';
import { useYoutubeVideos } from '../../utils/hooks/useYoutbeVideos';
import { useAppDataContext } from '../../providers/AppData';
import { VideoGrid, WelcomeDisplay } from './Home.styles';
import VideoCard from '../../components/VideoCard';

function HomePage() {
  const { state } = useAppDataContext();
  const { videos } = state;

  useYoutubeVideos();
  
  return (
    <section>
      <WelcomeDisplay>Welcome to my Challenge</WelcomeDisplay>
      <VideoGrid>
        {videos
          ? videos.map((video) => <VideoCard video={video} key={video.id} />)
          : null}
      </VideoGrid>
    </section>
  );
}

export default HomePage;
