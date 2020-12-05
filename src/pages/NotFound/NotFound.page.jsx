import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.divider};
  width: 100%;
  height: 250px;
  background-color: ${(props) => props.theme.body};
  word-wrap: break-word;
  box-sizing: border-box;
  text-align: center;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 13px;
  color: ${(props) => props.theme.text};
`;

function NotFound() {
  return (
    <Container>
      <FontAwesomeIcon icon={faSurprise} style={{ color: '#18A67B' }} size="5x" />
      <Title>Sorry! Page not found.</Title>
    </Container>
  );
}

export default NotFound;
