import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const RowDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
  cursor: pointer;
`;

const RowImg = styled.img`
  width: 120px;
  height: 90px;
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
`;

const RowTitle = styled.h3`
  color: black;
`;

function Row({ videoId, title, imageUrl }) {
  return (
    <RowDiv>
      <Link to={`/player/${videoId}`}>
        <RowContent>
          <RowImg src={imageUrl} alt={imageUrl} />
          <RowTitle>{title}</RowTitle>
        </RowContent>
      </Link>
    </RowDiv>
  );
}

export default Row;
