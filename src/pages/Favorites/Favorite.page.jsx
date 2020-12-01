import React from 'react';
import { Alert } from 'antd';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';
import VideoCard from '../../components/VideoCard/VideoCard.component';

function FavoritePage() {
  const { favorites } = useFavorites();

  return (
    <section className="full-width">
      {favorites.length > 0 ? (
        <div className="grid-layout">
          {favorites.map((item) => {
            const { snippet, id } = item;
            return <VideoCard data={snippet} id={id} key={id} />;
          })}
        </div>
      ) : (
        <div style={{ width: '100%', textAlign: 'center', padding: '5rem 0' }}>
          <Alert
            message="Warning"
            description="You haven't added any video to your favorites yet."
            type="warning"
            showIcon
            closable
          />
        </div>
      )}
    </section>
  );
}

export default FavoritePage;
