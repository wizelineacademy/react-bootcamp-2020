import React, { useContext } from 'react';

import styled from 'styled-components';
import Player from '../../components/Player/Player.component';
import Rowlist from '../../components/Rowlist/RowList.component';
import { FavoritesContext } from '../../providers/Favorites/Favorites.provider';

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
  const { favoriteVideos } = useContext(FavoritesContext);

  return (
    <PlayerPageContainer>
      <Player id={props.id.params.id} />
      <RowlistContainer>
        <Rowlist videos={favoriteVideos} isFavorit />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default FavoritesPlayer;
