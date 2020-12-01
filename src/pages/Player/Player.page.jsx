import React, { useContext } from 'react';

import styled from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';
import { VideoContext } from '../../providers/Video';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -215px;
  padding-left: 3px;
`;

const PlayerContainer = styled.div`
  width: 70%; 
`;

function PlayerPage(props) {
  const { currentVideo } = useContext(VideoContext);

  const url ="https://www.youtube.com/embed/" + props.id.params.id;
  return (
    <PlayerPageContainer>
      <PlayerContainer>
        <iframe
          width="1240"
          height="496"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      <p>{currentVideo.title}</p>
      <p>{currentVideo.description}</p>
       
      </PlayerContainer>
      <section>
        <Rowlist />
      </section>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
