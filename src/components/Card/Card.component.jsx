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
  max-width: 320px;
`;
const CardTitle = styled.h2`
  color: black;
  font-size: 20px;
  padding: 0px 10px;
`;

const CardDescription = styled.p`
  color: gray;
  font-size: 10px;
  padding: 0px 20px;
`;

function Card({ videoId, title, description, imageUrl, onClick }) {
  return (
    <CardDiv
      onClick={() => {
        onClick();
      }}
    >
      <Link to={`/player/${videoId}`}>
        <img src={imageUrl} alt={imageUrl} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Link>
    </CardDiv>
  );
}

export default Card;
