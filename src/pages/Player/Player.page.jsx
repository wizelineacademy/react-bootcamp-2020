import React, { useContext } from 'react';

import styled from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';
import Player from '../../components/Player/Player.component';
import { VideoContext } from '../../providers/Video';

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

function PlayerPage(props) {
  const { videos } = useContext(VideoContext);

  return (
    <PlayerPageContainer>
      <Player id={props.id.params.id} />
      <RowlistContainer>
        <Rowlist videos={videos} isFavorit={false} />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
