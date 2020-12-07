import React from 'react';
import styled from 'styled-components';

const CardHeader = styled.header`
  margin-bottom: auto;

  & img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  margin-bottom: auto;
  text-align: justify;

  & p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }

  & h4 {
    font-size: 14px;
    margin: 0.2rem 0 auto;
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;
  }

  & h6 {
    font-size: 10px;
    margin: 0.2rem 0 auto;
    text-decoration: none;
    color: inherit;
    display: block;
    bottom: 0.2rem;
    position: absolute;
  }

  & h4:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  width: calc(25% - 1rem);
  min-width: 150px;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #e2e2e2;
  border: solid 0.5px #efefef;

  transition: 0.2s;

  &:hover {
    border: solid 4px #efefef;
  }
`;

const formatDate = (datestring) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = new Date(datestring).toLocaleDateString('es-MX', options);

  return date;
};

const Card = ({ data, onClick }) => {
  return (
    <>
      {data && (
        <CardContainer onClick={onClick}>
          <CardHeader>
            <img src={data.thumbnail.url} alt={data.title} />
          </CardHeader>
          <CardContent>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <h6>{formatDate(data.publishedAt)}</h6>
          </CardContent>
        </CardContainer>
      )}
    </>
  );
};

export default Card;
