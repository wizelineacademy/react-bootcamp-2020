import React, { useContext } from 'react';

import styled from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';
import Player from '../../components/Player/Player.component';
import { VideoContext } from '../../providers/Video/Video.provider';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 0 10px;
`;

const RowlistContainer = styled.div`
  height: 100%;
  padding: 3px 0 0 15px;
`;

const PlayerContainer = styled.div`
  height: 100%;
  position: relative;
  padding-top: 3px;
  max-width: 60%;
  min-width: 60%;
`;

function PlayerPage(props) {
  const { videos } = useContext(VideoContext);

  return (
    <PlayerPageContainer>
      <PlayerContainer>
        <Player id={props.id.params.id} />
      </PlayerContainer>
      <RowlistContainer>
        <Rowlist videos={videos} isFavorit={false} />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
