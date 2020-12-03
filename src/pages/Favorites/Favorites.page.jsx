import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardList from '../../components/Cardlist/CardList.component';
import { getFavoritesVideos } from '../../utils/favorites';

const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
  width: 100%;
  color: ${(props) => props.theme.textcolor};
`;

const FavoritesPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5px;
  padding-left: 3px;
  text-align: center;
  height: 100%;
  flex-direction: row;
`;

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavoritesVideos());
  }, []);

  return (
    <FavoritesPageContainer>
      <H1>
        welcome, to your favorites
        <Link to="/"> ← go back</Link>
      </H1>
      <CardList videos={favorites} />
    </FavoritesPageContainer>
  );
}

export default FavoritesPage;
