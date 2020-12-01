import React from 'react';
import styled from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -579px;
  padding-left: 3px;
`;

const PlayerContainer = styled.div`
  width: 70%;
  background-color: black;
`;

function PlayerPage(props) {
  return (
    <PlayerPageContainer>
      <PlayerContainer />

      <section>
        <p>This is video id {props.id.params.id} </p>
        <Rowlist />
      </section>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
