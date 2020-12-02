import React, { useContext } from 'react';

import styled from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';
import { VideoContext } from '../../providers/Video';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const PlayerContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top:3px

`;

const RowlistContainer = styled.div`
  width: 30%;
  height: 100%; 
  padding:3px

`;

const TextDescription = styled.p`
  color: ${(props) => props.theme.textcolor};
`;

function PlayerPage(props) {
  const { currentVideo } = useContext(VideoContext);

  const url = `https://www.youtube.com/embed/${props.id.params.id}`;
  return (
    <PlayerPageContainer>
      <PlayerContainer>
        <iframe
          title={props.id.params.id}
          width="1240"
          height="496"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <TextDescription>{currentVideo.title}</TextDescription>
        <TextDescription>{currentVideo.description}</TextDescription>
      </PlayerContainer>
      <RowlistContainer>
        <Rowlist />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
