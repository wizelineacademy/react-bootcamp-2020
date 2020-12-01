import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 25px;
  cursor: pointer;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.26);
  border-radius: 18px;
`;
const CardTitle = styled.h2`
  color: black;
`;

const CardDescription = styled.p`
  color: black;
`;

function Card({ videoId, title, description, imageUrl }) {
  return (
    <CardDiv>
      <Link to={`/player/${videoId}`}>
        <img src={imageUrl} alt={imageUrl} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Link>
    </CardDiv>
  );
}

export default Card;
