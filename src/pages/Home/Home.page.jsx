import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import CardList from '../../components/Cardlist/CardList.component';
import { VideoContext } from '../../providers/Video';

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
  min-height: 91vh;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  const { videos } = useContext(VideoContext);
  return (
    <HomePageContainer ref={sectionRef}>
      <H1>Welcome to some youtube copy enjoy!</H1>
      {authenticated ? (
        <>
          <H2>Good to have you back</H2>
        </>
      ) : null}
      <CardList videos={videos} isFavorit={false} />
    </HomePageContainer>
  );
}

export default HomePage;
