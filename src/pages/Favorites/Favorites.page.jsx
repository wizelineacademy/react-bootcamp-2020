import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import { useSelector } from 'react-redux';
import './Favorites.styles.css';

function FavoritesPage() {
  const videos = useSelector(state => state.favorites);
  return (
    <section>
      <div className="content">
        <div>
          <h1>Here are your favorites!</h1>
        </div>
        {videos.items ? <VideoGrid videos={videos.items}/> : ''}
      </div>
    </section>
  );
}

export default FavoritesPage;