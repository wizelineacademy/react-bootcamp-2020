import React from 'react';
import { useYoutubeVideos } from '../../utils/hooks/useYoutbeVideos';
import { useAppDataContext } from '../../providers/AppData';
import { VideoListGrid } from "../../components/VideoListGrid";
import VideoCard from '../../components/VideoCard';



function HomePage() {
  const { state } = useAppDataContext();
  const { videos } = state;
  const emptyMessage="ohh no, theres is no videos..." 


  useYoutubeVideos();

  return (
    <section>
      <VideoListGrid 
      listSize={videos.length} 
      emptyMessage={emptyMessage} 
      welcomeMessage="Welcome to my challenge">
        {videos
          ? videos.map((video) => <VideoCard video={video} key={video.id} />)
          : null}
      </VideoListGrid>
    </section>
  );
}

export default HomePage;
