import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  font-size: 1rem;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 0.2rem 0.3rem;
`;

const LinkLabel = styled.div`
  color: black;
`;

function NotFoundPage() {
  return (
    <LinkContainer>
      <Link to="/">
        <LinkLabel>Please take me home</LinkLabel>
      </Link>
      <img src="404.gif" alt="page not found" />
    </LinkContainer>
  );
}

export default NotFoundPage;
