import React, { useRef } from 'react';
import styled from 'styled-components';
import CardList from '../../components/Cardlist/CardList.component';

import { useAuth } from '../../providers/Auth';

const StyledHomePage = styled.section`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <StyledHomePage ref={sectionRef}>
      <H1>Welcome to some youtube copy enjoy!</H1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
        </>
      ) : (
        <> </>
      )}
      <CardList />
    </StyledHomePage>
  );
}

export default HomePage;
