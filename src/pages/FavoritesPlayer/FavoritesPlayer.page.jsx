import React from 'react';
import styled from 'styled-components';
import Player from '../../components/Player/Player.component';
import Rowlist from '../../components/Rowlist/RowList.component';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const RowlistContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 3px;
`;

function FavoritesPlayer(props) {
  return (
    <PlayerPageContainer>
      <Player id={props.id.params.id} />
      <RowlistContainer>
        <Rowlist />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default FavoritesPlayer;
