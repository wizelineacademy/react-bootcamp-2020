import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Player from '../../components/Player/Player.component';
import Rowlist from '../../components/Rowlist/RowList.component';
import { getFavoritesVideos } from '../../utils/favorites';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 91vh;
  flex-direction: row;
`;

const RowlistContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 3px;
`;

function FavoritesPlayer(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavoritesVideos());
  }, []);

  return (
    <PlayerPageContainer>
      <Player id={props.id.params.id} />
      <RowlistContainer>
        <Rowlist videos={favorites} isFavorit />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default FavoritesPlayer;
