import React from 'react';
import VideoCard from '../../components/VideoCard';
import { useAppDataContext } from '../../providers/AppData';
import { VideoListGrid } from '../../components/VideoListGrid';

export default function Favorites() {
  const { state } = useAppDataContext();
  const { favorites } = state;
  const emptyMessage = 'Your favorites is empty, add some ones';
  return (
    <section>
      <VideoListGrid
        welcomeMessage="Favorites"
        emptyMessage={emptyMessage}
        listSize={favorites.length}
      >
        {favorites
          ? favorites.map((video) => <VideoCard video={video} key={video.id} />)
          : null}
      </VideoListGrid>
    </section>
  );
}
