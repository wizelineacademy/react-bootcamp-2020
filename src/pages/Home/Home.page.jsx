import React, { useRef } from 'react';
import styled from 'styled-components';
import CardList from '../../components/Cardlist/CardList.component';

import { useAuth } from '../../providers/Auth';

const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
  width: 100%;
  color: ${(props) => props.theme.textcolor};

`;

const H2 = styled.h2` 
  letter-spacing: -2px;
  width: 100%;
  color: ${(props) => props.theme.textcolor};

`;

const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5px;
  padding-left: 3px;
  text-align: center;
  height: 100%;
  flex-direction: row;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <HomePageContainer ref={sectionRef}>
      <H1>Welcome to some youtube copy enjoy!</H1>
      {authenticated ? (
        <>
          <H2>Good to have you back</H2>
        </>
      ) : (
        <> </>
      )}
      <CardList />
    </HomePageContainer>
  );
}

export default HomePage;
