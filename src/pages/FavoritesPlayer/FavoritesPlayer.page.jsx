import React, { useContext } from 'react';

import styled from 'styled-components';
import Player from '../../components/Player/Player.component';
import Rowlist from '../../components/Rowlist/RowList.component';
import { FavoritesContext } from '../../providers/Favorites/Favorites.provider';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: row;
  min-height: 91vh;
  padding: 0 10px;
`;

const RowlistContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 3px;
`;

const PlayerContainer = styled.div`
  height: 100%;
  position: relative;
  padding-top: 3px;
  max-width: 60%;
  min-width: 60%;
`;

function FavoritesPlayer(props) {
  const { favoriteVideos } = useContext(FavoritesContext);

  return (
    <PlayerPageContainer>
      <PlayerContainer>
        <Player id={props.id.params.id} />
      </PlayerContainer>
      <RowlistContainer>
        <Rowlist videos={favoriteVideos} isFavorit />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default FavoritesPlayer;
