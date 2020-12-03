import React, { useRef } from 'react';
import styled from 'styled-components';
import VideoItem from '../../components/VideoItem';
import { useVideoContext } from '../../VideoState/Provider';

import './Favorite.styles.css';

const ItemContainer = styled.div`
  width: 100%;
  border: 0px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

function FavoritesPage() {
  const { favorites } = useVideoContext();

  const sectionRef = useRef(null);

  return (
    <section className="favorite" ref={sectionRef}>
      <h1>My Favorites</h1>
      <ItemContainer>
        {favorites.map((item) => (
          <VideoItem
            key={item.id}
            title={item.title}
            img={item.img}
            author={item.author}
            description={item.description || 'No description.'}
            id={item.id}
          />
        ))}
      </ItemContainer>
    </section>
  );
}

export default FavoritesPage;
